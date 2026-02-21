import { Form, Input, Button, Typography, Space, Card } from 'antd'
import WhatsAppButton from '../components/common/WhatsAppButton'

const { Title, Paragraph } = Typography

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const onFinish = (values: ContactFormValues) => {
    console.log('Formulario enviado:', values)
    // Aquí luego se conecta backend / email / Firebase
  }

  return (
    <Space direction="vertical" size={32} style={{ width: '100%' }}>
      {/* INTRO */}
      <div style={{ textAlign: 'center' }}>
        <Title>Contacto</Title>
        <Paragraph style={{ fontSize: 16 }}>
          ¿Tienes dudas o quieres agendar una cita? Escríbeme y te responderé
          lo antes posible.
        </Paragraph>
      </div>

      {/* FORMULARIO */}
      <Card style={{ maxWidth: 600, margin: '0 auto' }}>
        <Form<ContactFormValues>
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="Nombre"
            name="name"
            rules={[
              { required: true, message: 'Por favor ingresa tu nombre' },
            ]}
          >
            <Input placeholder="Tu nombre completo" />
          </Form.Item>

          <Form.Item
            label="Correo electrónico"
            name="email"
            rules={[
              { required: true, message: 'Ingresa tu correo' },
              { type: 'email', message: 'Correo no válido' },
            ]}
          >
            <Input placeholder="correo@ejemplo.com" />
          </Form.Item>

          <Form.Item
            label="Mensaje"
            name="message"
            rules={[
              { required: true, message: 'Escribe tu mensaje' },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Cuéntame brevemente tu caso"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Enviar mensaje
            </Button>
          </Form.Item>
        </Form>
      </Card>

      {/* ALTERNATIVA WHATSAPP */}
      <div style={{ textAlign: 'center' }}>
        <Paragraph>
          ¿Prefieres escribir directamente?
        </Paragraph>
        <WhatsAppButton />
      </div>
    </Space>
  )
}
