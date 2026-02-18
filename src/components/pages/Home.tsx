import WhatsAppButton from '../components/common/WhatsAppButton'
import { Button, Col, Row, Typography, Space, Card } from 'antd'

const { Title, Paragraph } = Typography

export default function Home() {
  return (
    <>
      {/* HERO */}
      <Row
        align="middle"
        justify="center"
        style={{ minHeight: '70vh' }}
      >
        <Col xs={24} md={12}>
          <Space direction="vertical" size="large">
            <Title style={{ color: '#2E7D6F' }}>
              Recupera tu movilidad y calidad de vida
            </Title>

            <Paragraph style={{ fontSize: 16 }}>
              Fisioterapia profesional para dolor muscular, lesiones
              deportivas y rehabilitación funcional. Atención personalizada
              y seguimiento continuo.
            </Paragraph>

            <Space>
              <Button type="primary" size="large">
                Agenda tu cita
              </Button>
              <Button size="large">
                Ver servicios
              </Button>
            </Space>
          </Space>
        </Col>
      </Row>

      {/* SERVICIOS */}
      <Row justify="center" style={{ padding: '64px 0' }}>
        <Col xs={24} md={16}>
          <Title level={2} style={{ textAlign: 'center' }}>
            Nuestros servicios
          </Title>

          <Row gutter={[24, 24]} style={{ marginTop: 32 }}>
            <Col xs={24} md={8}>
              <Card title="Rehabilitación física">
                Tratamiento especializado para recuperación
                funcional después de lesiones o cirugías.
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card title="Dolor muscular y articular">
                Manejo del dolor crónico y agudo con técnicas
                terapéuticas avanzadas.
              </Card>
            </Col>

            <Col xs={24} md={8}>
              <Card title="Fisioterapia deportiva">
                Prevención y tratamiento de lesiones
                en actividad física y deporte.
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
            {/* CONFIANZA */}
      <Row justify="center" style={{ paddingBottom: 64 }}>
        <Col xs={24} md={14}>
          <Card>
            <Space direction="vertical" size="middle">
              <Title level={3}>
                Atención profesional y personalizada
              </Title>

              <Paragraph>
                Soy fisioterapeuta certificada, enfocada en la recuperación
                funcional y el bienestar integral de cada paciente. Cada
                tratamiento se adapta a tus necesidades específicas,
                con seguimiento continuo y enfoque humano.
              </Paragraph>

              <Paragraph>
                Trabajo con técnicas basadas en evidencia, buscando no solo
                aliviar el dolor, sino mejorar tu calidad de vida a largo
                plazo.
              </Paragraph>
            </Space>
          </Card>
        </Col>
      </Row>
      {/* CTA FINAL */}
      <Row
        justify="center"
        align="middle"
        style={{
          background: '#f5f5f5',
          padding: '64px 16px',
        }}
      >
        <Col xs={24} md={12} style={{ textAlign: 'center' }}>
          <Space direction="vertical" size="large">
            <Title level={2}>
              Da el primer paso hacia tu recuperación
            </Title>

            <Paragraph style={{ fontSize: 16 }}>
              Agenda tu cita hoy mismo y comienza tu proceso
              de recuperación con acompañamiento profesional.
            </Paragraph>

            <WhatsAppButton />


          </Space>
        </Col>
      </Row>

    </>
  )
}
