const WHATSAPP_NUMBER = '6285600604388'

export function whatsappLink(message?: string) {
  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`)
  if (message) url.searchParams.set('text', message)
  return url.toString()
}
