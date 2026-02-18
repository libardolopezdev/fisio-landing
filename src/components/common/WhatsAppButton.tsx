import { Button } from 'antd'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '../../config/contact'

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
  )}`

  return (
    <Button
      type="primary"
      size="large"
      href={url}
      target="_blank"
    >
      Contactar por WhatsApp
    </Button>
  )
}
