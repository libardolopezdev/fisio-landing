import { Form, Input, Button, Typography, Card, Row, Col } from 'antd'
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'

import { buildWhatsAppUrl } from '../utils/whatsapp'

const { Title, Paragraph } = Typography

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const onFinish = (values: ContactFormValues) => {
    const text =
      'Hola Camila, mi nombre es ' +
      values.name +
      '. ' +
      values.message +
      ' Mi correo es: ' +
      values.email
    const url = buildWhatsAppUrl(text)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '140px 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <Title>Contacto</Title>
        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          ¿Tienes dudas o quieres agendar una cita? Escríbeme y te responderé lo antes posible.
        </Paragraph>
      </motion.div>
      <Row gutter={[48, 48]} align="top">
        <Col xs={24} md={10}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 24 }}
          >
            <Title level={3} style={{ color: '#2E7D6F' }}>
              Información de contacto
            </Title>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <PhoneOutlined style={{ fontSize: 24, color: '#2E7D6F' }} />
              <div>
                <div style={{ fontWeight: 600 }}>Teléfono / WhatsApp</div>
                <div style={{ color: '#555' }}>+57 318 809 5343</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <MailOutlined style={{ fontSize: 24, color: '#2E7D6F' }} />
              <div>
                <div style={{ fontWeight: 600 }}>Correo electrónico</div>
                <div style={{ color: '#555' }}>fisioximenasuarez@gmail.com</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <EnvironmentOutlined style={{ fontSize: 24, color: '#2E7D6F' }} />
              <div>
                <div style={{ fontWeight: 600 }}>Ubicación</div>
                <div style={{ color: '#555' }}>Medellín, Colombia</div>
              </div>
            </div>
            <a
              href={buildWhatsAppUrl('Hola Camila, me gustaría agendar una cita.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                type="primary"
                size="large"
                block
                style={{ background: '#2E7D6F', borderColor: '#2E7D6F' }}
              >
                Escribir por WhatsApp
              </Button>
            </a>
          </motion.div>
        </Col>
        <Col xs={24} md={14}>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card style={{ borderRadius: 16 }}>
              <Title level={4} style={{ marginBottom: 24 }}>
                Enviáme un mensaje
              </Title>
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item
                  label="Nombre"
                  name="name"
                  rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                >
                  <Input placeholder="Tu nombre completo" size="large" />
                </Form.Item>
                <Form.Item
                  label="Correo electrónico"
                  name="email"
                  rules={[
                    { required: true, message: 'Ingresa tu correo' },
                    { type: 'email', message: 'Correo no válido' },
                  ]}
                >
                  <Input placeholder="correo@ejemplo.com" size="large" />
                </Form.Item>
                <Form.Item
                  label="Mensaje"
                  name="message"
                  rules={[{ required: true, message: 'Escribe tu mensaje' }]}
                >
                  <Input.TextArea rows={4} placeholder="Cuéntame brevemente tu caso" size="large" />
                </Form.Item>
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    size="large"
                    style={{ background: '#2E7D6F', borderColor: '#2E7D6F' }}
                  >
                    Enviar por WhatsApp
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </motion.div>
        </Col>
      </Row>
    </div>
  )
}
