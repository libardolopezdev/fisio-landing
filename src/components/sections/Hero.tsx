import { Row, Col, Typography, Button } from "antd"
import retrato from "../../assets/images/retrato-profesional.png"

const { Title, Paragraph } = Typography

export default function Hero() {
  return (
    <Row
      align="middle"
      justify="center"
      style={{
        minHeight: "85vh",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <img
        src={retrato}
        alt="Fisioterapeuta Camila Suarez"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 0%",
          filter: "brightness(0.6)"
        }}
      />

      <Col
        xs={22}
        md={14}
        style={{
          zIndex: 2,
          textAlign: "center",
          paddingTop: "80vh",    // ← sube el texto hacia abajo
          paddingBottom: 40
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
          <Title style={{ color: "white", marginBottom: 0, fontSize: 32 }}>  {/* ← más pequeño */}
            Recupera tu movimiento
          </Title>

          <Paragraph style={{ color: "white", fontSize: 15 }}>  {/* ← más pequeño */}
            Atención fisioterapéutica personalizada enfocada en tu bienestar,
            recuperación funcional y calidad de vida.
          </Paragraph>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Button type="primary" size="large" style={{ background: "#4a9b6f", borderColor: "#4a9b6f" }}>
              Agenda tu cita
            </Button>
            <Button size="large" style={{ color: "white", borderColor: "white", background: "transparent" }}>
              Ver servicios
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}