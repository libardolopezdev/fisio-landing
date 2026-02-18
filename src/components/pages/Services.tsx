import { Card, Col, Row, Typography, Space, Button } from 'antd'
import WhatsAppButton from '../components/common/WhatsAppButton'

const { Title, Paragraph } = Typography

type Service = {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: 'Rehabilitación física',
    description:
      'Tratamientos personalizados para recuperación funcional después de lesiones, cirugías o inmovilizaciones.',
  },
  {
    title: 'Dolor muscular y articular',
    description:
      'Manejo del dolor crónico y agudo mediante técnicas terapéuticas basadas en evidencia.',
  },
  {
    title: 'Fisioterapia deportiva',
    description:
      'Prevención, tratamiento y recuperación de lesiones asociadas a la actividad física y el deporte.',
  },
  {
    title: 'Masoterapia terapéutica',
    description:
      'Terapias manuales orientadas a aliviar tensiones musculares, mejorar la circulación y reducir el estrés.',
  },
]

export default function Services() {
  return (
    <Space direction="vertical" size={48} style={{ width: '100%' }}>
      {/* INTRO */}
      <div style={{ textAlign: 'center' }}>
        <Title>Servicios de fisioterapia</Title>
        <Paragraph style={{ fontSize: 16 }}>
          Cada tratamiento se adapta a tus necesidades específicas, con un
          enfoque profesional, humano y basado en evidencia.
        </Paragraph>
      </div>

      {/* LISTADO DE SERVICIOS */}
      <Row gutter={[24, 24]} justify="center">
        {services.map((service) => (
          <Col xs={24} md={10} lg={8} key={service.title}>
            <Card title={service.title}>
              <Paragraph>{service.description}</Paragraph>

              <Button type="link">
                Consultar este servicio
              </Button>
            </Card>
          </Col>
        ))}
      </Row>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <Title level={3}>
          ¿Necesitas orientación sobre tu caso?
        </Title>
        <Paragraph>
          Escríbeme y te ayudaré a elegir el tratamiento adecuado.
        </Paragraph>

        <WhatsAppButton />
      </div>
    </Space>
  )
}
