'use client'

import { useEffect, useRef } from 'react'

const VERT = `
attribute vec2 a_position;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAG = `
precision highp float;
uniform vec2  u_resolution;
uniform float u_time;
uniform vec2  u_pointer;
uniform float u_scale;
uniform float u_intensity;

// Deep plum field with a soft lavender and pink pointer glow.
vec3 col0 = vec3(0.027, 0.024, 0.043); // #07060b
vec3 col1 = vec3(0.286, 0.133, 0.357); // #49225b
vec3 col2 = vec3(0.906, 0.859, 0.937); // #e7dbef
vec3 col3 = vec3(0.647, 0.416, 0.741); // #a56abd

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i + vec2(0,0)), hash(i + vec2(1,0)), u.x),
    mix(hash(i + vec2(0,1)), hash(i + vec2(1,1)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  vec2  s = vec2(1.0);
  for (int i = 0; i < 6; i++) {
    v += a * noise(p);
    p  = p * 2.0 + vec2(1.7, 9.2);
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv.y    = 1.0 - uv.y;
  float aspect = u_resolution.x / u_resolution.y;

  // Warped fbm
  vec2 q = vec2(fbm(uv * u_scale + u_time * 0.07),
                fbm(uv * u_scale + vec2(1.0) + u_time * 0.05));
  vec2 r = vec2(fbm(uv * u_scale * 1.4 + q + vec2(1.7, 9.2) + u_time * 0.04),
                fbm(uv * u_scale * 1.4 + q + vec2(8.3, 2.8) - u_time * 0.03));
  float f = fbm(uv * u_scale + r);

  // Keep the field nearly black; let the pointer create the visible glow.
  vec3 base = mix(col0, col1, smoothstep(0.34, 0.86, f) * 0.16);

  // Pointer glow — keep pointer in [0,1] UV space
  vec2 pUV = u_pointer / u_resolution;
  pUV.y    = 1.0 - pUV.y;
  pUV.x   *= aspect;
  vec2 uvA  = uv;
  uvA.x    *= aspect;
  float d   = distance(uvA, pUV);
  float halo = clamp(u_intensity * 0.82 * exp(-d * d * 2.6), 0.0, 0.72);
  float bloom = clamp(u_intensity * 0.64 * exp(-d * d * 8.0), 0.0, 0.72);
  float core = clamp(u_intensity * 0.46 * exp(-d * d * 25.0), 0.0, 0.68);
  base = mix(base, col1, halo);
  base = mix(base, col2, bloom);
  base = mix(base, col3, core * 0.72);
  base = mix(base, vec3(1.0), core * 0.32);

  // Vignette
  float vig = 1.0 - 0.55 * length(uv - 0.5) * 1.9;
  base *= vig;

  gl_FragColor = vec4(base, 1.0);
}
`

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!
  gl.shaderSource(s, src)
  gl.compileShader(s)
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))
    console.error(gl.getShaderInfoLog(s))
  return s
}

export default function PointerGlowShader({
  className = '',
  scale = 0.7,
  intensity = 1.4,
}: {
  className?: string
  scale?: number
  intensity?: number
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ptr = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const raf = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    const vert = compileShader(gl, gl.VERTEX_SHADER, VERT)
    const frag = compileShader(gl, gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()!
    gl.attachShader(prog, vert)
    gl.attachShader(prog, frag)
    gl.linkProgram(prog)
    gl.useProgram(prog)

    // Full-screen quad
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    )
    const aPos = gl.getAttribLocation(prog, 'a_position')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes  = gl.getUniformLocation(prog, 'u_resolution')
    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uPtr  = gl.getUniformLocation(prog, 'u_pointer')
    const uScale= gl.getUniformLocation(prog, 'u_scale')
    const uInt  = gl.getUniformLocation(prog, 'u_intensity')

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 2)
      canvas!.width  = canvas!.clientWidth  * dpr
      canvas!.height = canvas!.clientHeight * dpr
      gl!.viewport(0, 0, canvas!.width, canvas!.height)
    }
    resize()
    ptr.current.x = ptr.current.tx = canvas.width * 0.3
    ptr.current.y = ptr.current.ty = canvas.height * 0.5

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const start = performance.now()
    function render() {
      const t = (performance.now() - start) / 1000
      // smooth pointer
      ptr.current.x += (ptr.current.tx - ptr.current.x) * 0.07
      ptr.current.y += (ptr.current.ty - ptr.current.y) * 0.07

      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
      gl!.uniform1f(uTime, t)
      gl!.uniform2f(uPtr, ptr.current.x, ptr.current.y)
      gl!.uniform1f(uScale, scale)
      gl!.uniform1f(uInt, intensity)
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4)
      raf.current = requestAnimationFrame(render)
    }
    raf.current = requestAnimationFrame(render)

    function onMove(e: MouseEvent | TouchEvent) {
      const rect = canvas!.getBoundingClientRect()
      const dpr  = Math.min(window.devicePixelRatio, 2)
      const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX
      const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY
      ptr.current.tx = (clientX - rect.left) * dpr
      ptr.current.ty = (clientY - rect.top)  * dpr
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })

    return () => {
      cancelAnimationFrame(raf.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
      gl.deleteProgram(prog)
    }
  }, [scale, intensity])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: 'block', width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
