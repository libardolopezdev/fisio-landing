import { Form, Input, Button, Typography, Card, Row, Col } from "antd"
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from "@ant-design/icons"

const { Title, Paragraph } = Typography

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const onFinish = (values: ContactFormValues) => {
    const text = "Hola Camila, mi nombre es " + values.name + ". " + values.message + " Mi correo es: " + values.email
    const url = "https://wa.me/573188095343?text=" + encodeURIComponent(text)
    window.open(url, "_blank")
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <Title>Contacto</Title>
        <Paragraph style={{ fontSize: 16, color: "#666" }}>
          Tienes dudas o quieres agendar una cita? Escribeme y te respondere lo antes posible.
        </Paragraph>
      </div>
      <Row gutter={[48, 48]} align="top">
        <Col xs={24} md={10}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Title level={3} style={{ color: "#2E7D6F" }}>Informacion de contacto</Title>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <PhoneOutlined style={{ fontSize: 24, color: "#2E7D6F" }} />
              <div>
                <div style={{ fontWeight: 600 }}>Telefono / WhatsApp</div>
                <div style={{ color: "#555" }}>+57 318 809 5343</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <MailOutlined style={{ fontSize: 24, color: "#2E7D6F" }} />
              <div>
                <div style={{ fontWeight: 600 }}>Correo electronico</div>
                <div style={{ color: "#555" }}>fisioximenasuarez@gmail.com</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <EnvironmentOutlined style={{ fontSize: 24, color: "#2E7D6F" }} />
              <div>
                <div style={{ fontWeight: 600 }}>Ubicacion</div>
                <div style={{ color: "#555" }}>Medellin, Colombia</div>
              </div>
            </div>
            <a href="https://wa.me/573188095343?text=Hola%20Camila%2C%20me%20gustaria%20agendar%20una%20cita." target="_blank" rel="noopener noreferrer">
              <Button type="primary" size="large" block style={{ background: "#2E7D6F", borderColor: "#2E7D6F" }}>
                Escribir por WhatsApp
              </Button>
            </a>
          </div>
        </Col>
        <Col xs={24} md={14}>
          <Card style={{ borderRadius: 16 }}>
            <Title level={4} style={{ marginBottom: 24 }}>Enviame un mensaje</Title>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Nombre" name="name" rules={[{ required: true, message: "Por favor ingresa tu nombre" }]}>
                <Input placeholder="Tu nombre completo" size="large" />
              </Form.Item>
              <Form.Item label="Correo electronico" name="email" rules={[{ required: true, message: "Ingresa tu correo" }, { type: "email", message: "Correo no valido" }]}>
                <Input placeholder="correo@ejemplo.com" size="large" />
              </Form.Item>
              <Form.Item label="Mensaje" name="message" rules={[{ required: true, message: "Escribe tu mensaje" }]}>
                <Input.TextArea rows={4} placeholder="Cuentame brevemente tu caso" size="large" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large" style={{ background: "#2E7D6F", borderColor: "#2E7D6F" }}>
                  Enviar por WhatsApp
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
