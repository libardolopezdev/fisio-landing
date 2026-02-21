import { Row, Col, Typography, Button } from "antd"
import retrato from "../../assets/images/retrato-profesional.png"

const { Title, Paragraph } = Typography

export default function Hero() {

  const handleWhatsApp = () => {
    const phone = "573001234567" // ← reemplaza
    const message = "Hola, quiero agendar una cita"
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Row
      align="bottom"
      justify="center"
      style={{
        height: "clamp(420px, 70vh, 720px)",
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
          paddingBottom: 48
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

          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              size="large"
              style={{
                background: "#4a9b6f",
                borderColor: "#4a9b6f"
              }}
              onClick={handleWhatsApp}
            >
              Agenda tu cita
            </Button>
          </div>

        </div>
      </Col>
    </Row>
  )
}