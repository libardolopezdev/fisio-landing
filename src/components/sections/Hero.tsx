import { Row, Col, Typography, Button } from "antd"
import retrato from "../../assets/images/retrato-profesional.png"

const { Title, Paragraph } = Typography

export default function Hero() {
  return (
    <Row
      align="bottom"
      justify="center"
      style={{
        height: "clamp(420px, 70vh, 720px)",   // ✅ altura responsive
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
          objectPosition: "center 10%",
          filter: "brightness(0.6)"
        }}
      />

      <Col
        xs={22}
        md={14}
        style={{
          zIndex: 2,
          textAlign: "center",
          paddingBottom: 48   // ✅ control limpio del spacing
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <Title style={{ color: "white", marginBottom: 0 }}>
            Recupera tu movimiento
          </Title>

          <Paragraph style={{ color: "white", fontSize: 16 }}>
            Atención fisioterapéutica personalizada enfocada en tu bienestar,
            recuperación funcional y calidad de vida.
          </Paragraph>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Button
              type="primary"
              size="large"
              style={{ background: "#4a9b6f", borderColor: "#4a9b6f" }}
            >
              Agenda tu cita
            </Button>

            <Button
              size="large"
              style={{ color: "white", borderColor: "white", background: "transparent" }}
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  )
}