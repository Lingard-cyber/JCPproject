'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;

  float wave(float x, float base, float amplitude, float frequency, float phase, float speed, float time) {
    return base
      + sin(x * frequency + phase + time * speed) * amplitude
      + sin(x * frequency * 0.47 - phase * 0.7 - time * speed * 0.63) * amplitude * 0.28;
  }

  void addWave(inout vec3 color, inout float alpha, vec2 uv, float curve, vec3 tint, float pixel, float strength) {
    float distance = abs(uv.y - curve);
    float glow = exp(-distance / (pixel * 12.0));
    float halo = exp(-distance / (pixel * 34.0));
    float core = exp(-distance / (pixel * 1.6));
    float intensity = glow * 0.13 + halo * 0.035 + core * strength * 0.42;
    color += tint * intensity;
    alpha = min(alpha + intensity * 0.55, 0.44);
  }

  void main() {
    vec2 uv = vUv;
    float time = uTime;
    float pixel = 1.0 / max(uResolution.y, 1.0);
    vec3 color = vec3(0.0);
    float alpha = 0.0;

    vec3 blue = vec3(0.012, 0.08, 0.36);
    vec3 cyan = vec3(0.045, 0.24, 0.48);
    vec3 violet = vec3(0.18, 0.045, 0.42);
    vec3 pink = vec3(0.38, 0.1, 0.52);
    vec3 edgeColor = mix(blue, pink, smoothstep(0.2, 0.9, uv.x));

    float bottomOne = wave(uv.x, 0.055, 0.028, 7.2, 0.2, 0.27, time);
    float bottomTwo = wave(uv.x, 0.082, 0.035, 5.3, 2.1, -0.22, time);
    float bottomThree = wave(uv.x, 0.025, 0.018, 10.4, 4.0, 0.18, time);
    float bottomFour = wave(uv.x, 0.115, 0.024, 4.2, 1.1, -0.16, time);

    float topOne = 1.0 - wave(uv.x, 0.045, 0.027, 6.4, 1.3, -0.24, time);
    float topTwo = 1.0 - wave(uv.x, 0.078, 0.035, 4.8, 3.0, 0.2, time);
    float topThree = 1.0 - wave(uv.x, 0.025, 0.018, 9.3, 4.5, -0.17, time);
    float topFour = 1.0 - wave(uv.x, 0.12, 0.025, 3.9, 0.7, 0.14, time);

    addWave(color, alpha, uv, bottomOne, mix(cyan, violet, smoothstep(0.4, 0.9, uv.x)), pixel, 0.85);
    addWave(color, alpha, uv, bottomTwo, edgeColor, pixel, 0.72);
    addWave(color, alpha, uv, bottomThree, mix(violet, cyan, smoothstep(0.2, 0.75, uv.x)), pixel, 0.5);
    addWave(color, alpha, uv, bottomFour, mix(blue, pink, smoothstep(0.3, 0.9, uv.x)), pixel, 0.42);

    addWave(color, alpha, uv, topOne, mix(pink, cyan, smoothstep(0.35, 0.85, uv.x)), pixel, 0.8);
    addWave(color, alpha, uv, topTwo, edgeColor, pixel, 0.66);
    addWave(color, alpha, uv, topThree, mix(cyan, violet, smoothstep(0.15, 0.8, uv.x)), pixel, 0.48);
    addWave(color, alpha, uv, topFour, mix(violet, pink, smoothstep(0.3, 0.9, uv.x)), pixel, 0.4);

    gl_FragColor = vec4(color, alpha);
    #include <colorspace_fragment>
  }
`

export default function HeroWaveScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const host = canvas?.parentElement
    if (!canvas || !host) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      })
    } catch {
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10)
    camera.position.z = 1

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(1, 1) },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      toneMapped: false,
    })
    const geometry = new THREE.PlaneGeometry(2, 2)
    scene.add(new THREE.Mesh(geometry, material))
    renderer.setClearColor(0x000000, 0)

    const clock = new THREE.Clock()
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let inView = true

    const renderFrame = () => {
      material.uniforms.uTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
      if (!motionQuery.matches && inView && !document.hidden) {
        frame = window.requestAnimationFrame(renderFrame)
      }
    }

    const setSize = () => {
      const { width, height } = host.getBoundingClientRect()
      if (!width || !height) return

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25))
      renderer.setSize(width, height, false)
      ;(material.uniforms.uResolution.value as THREE.Vector2).set(width, height)
      renderer.render(scene, camera)
    }

    const start = () => {
      window.cancelAnimationFrame(frame)
      if (!motionQuery.matches && inView && !document.hidden) {
        frame = window.requestAnimationFrame(renderFrame)
      } else {
        material.uniforms.uTime.value = 0
        renderer.render(scene, camera)
      }
    }

    const resizeObserver = new ResizeObserver(setSize)
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting
      start()
    })
    const handleVisibility = () => start()

    resizeObserver.observe(host)
    visibilityObserver.observe(host)
    document.addEventListener('visibilitychange', handleVisibility)
    motionQuery.addEventListener('change', start)
    setSize()
    start()

    return () => {
      window.cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      document.removeEventListener('visibilitychange', handleVisibility)
      motionQuery.removeEventListener('change', start)
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="np-hero-scene" aria-hidden="true" />
}
