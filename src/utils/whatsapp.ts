import { WHATSAPP_NUMBER } from '../config/contact'

export function buildWhatsAppUrl(message: string) {
  return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message)
}
