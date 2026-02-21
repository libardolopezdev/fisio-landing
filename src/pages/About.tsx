import { Row, Col, Typography, Card } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import camilaFoto from '../assets/images/camila-sobre-mi.jpg'

const { Title, Paragraph } = Typography

const certifications = [
  "Punción seca",
  "Vendaje neuromuscular",
  "Rehabilitación en piso pélvico",
  "Dermapen"
]

export default function About() {
  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 20px" }}>

      <Title level={2} style={{ textAlign: "center", marginBottom: 48 }}>
        Sobre mí
      </Title>

      <Row gutter={[48, 48]} align="middle" style={{ marginBottom: 64 }}>

        <Col xs={24} md={10}>
          <img
            src={camilaFoto}
            alt="Ft. Ximena Camila Suarez"
            style={{
              width: "100%",
              height: 500,
              objectFit: "cover",
              objectPosition: "center top",
              borderRadius: 16,
              display: "block"
            }}
          />
        </Col>

        <Col xs={24} md={14}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Title level={3} style={{ color: "#2E7D6F", marginBottom: 0 }}>
              Ft. Ximena Camila Suarez Pedroza
            </Title>
            <Title level={5} style={{ color: "#666", marginTop: 0, fontWeight: 400 }}>
              Fisioterapeuta · Especialista en Seguridad y Salud en el Trabajo
            </Title>

            <Paragraph style={{ fontSize: 16 }}>
              Desde pequeña, Camila fue testigo de cómo su abuela enfrentó una larga
              recuperación tras una fractura de cadera. Ver ese proceso la marcó profundamente
              y despertó en ella el deseo de ayudar a las personas a recuperar su movimiento
              y calidad de vida. Fue así como eligió la fisioterapia como vocación.
            </Paragraph>

            <Paragraph style={{ fontSize: 16 }}>
              Con más de 7 años de experiencia, se ha especializado en el tratamiento de
              fracturas, rehabilitación de piso pélvico y salud en el trabajo. Su enfoque
              combina técnicas basadas en evidencia con un trato humano y cercano, adaptando
              cada tratamiento a las necesidades individuales de sus pacientes.
            </Paragraph>

            <Paragraph style={{ fontSize: 16 }}>
              Formada en la Universidad María Cano y la Universidad Manuela Beltrán,
              ha complementado su formación con cursos especializados que le permiten
              ofrecer una atención integral y actualizada.
            </Paragraph>
          </div>
        </Col>

      </Row>

      <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 64 }}>
        {[
          { number: "7+", label: "Años de experiencia" },
          { number: "20.000+", label: "Pacientes atendidos" },
          { number: "2", label: "Universidades" },
          { number: "4+", label: "Certificaciones" }
        ].map((stat, i) => (
          <Col xs={12} md={6} key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 40, fontWeight: 700, color: "#2E7D6F" }}>
              {stat.number}
            </div>
            <div style={{ fontSize: 14, color: "#666" }}>
              {stat.label}
            </div>
          </Col>
        ))}
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: 12, height: "100%" }}>
            <Title level={4} style={{ color: "#2E7D6F" }}>Formación académica</Title>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              <Paragraph style={{ margin: 0 }}>
                🎓 Universidad María Cano — Fisioterapia
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                🎓 Universidad Manuela Beltrán — Especialidad en Seguridad y Salud en el Trabajo
              </Paragraph>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card style={{ borderRadius: 12, height: "100%" }}>
            <Title level={4} style={{ color: "#2E7D6F" }}>Certificaciones</Title>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
              {certifications.map((cert, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircleOutlined style={{ color: "#2E7D6F", fontSize: 18 }} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

    </div>
  )
}