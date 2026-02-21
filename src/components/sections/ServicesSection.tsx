import { Card, Row, Col, Button } from "antd"
import { Link } from "react-router-dom"

import rehab from "../../assets/images/rehabilitacion-fisica.png"
import preventiva from "../../assets/images/fisioterapia-preventiva.png"
import masaje from "../../assets/images/masaje-descontracturante.png"

type Service = {
    title: string
    img: string
    description: string
}

const services: Service[] = [
    {
        title: "Rehabilitación física",
        img: rehab,
        description:
            "Tratamiento de lesiones osteomusculares y postquirúrgicas para recuperar tu funcionalidad.",
    },
    {
        title: "Fisioterapia preventiva",
        img: preventiva,
        description:
            "Programas para prevenir lesiones y mantener tu salud física a largo plazo.",
    },
    {
        title: "Masaje descontracturante",
        img: masaje,
        description:
            "Técnica para aliviar tensiones musculares, reducir dolor y mejorar la circulación.",
    },
]

export default function ServicesSection() {
    return (
        <section
            id="services"   // ✅ ANCLA PARA SCROLL DESDE HERO
            style={{ padding: "60px 0", background: "#f9f9f9" }}
        >
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

                {/* Header */}
                <h2
                    style={{
                        textAlign: "center",
                        fontSize: 32,
                        marginBottom: 8,
                        fontWeight: 700,
                    }}
                >
                    Mis servicios
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: 40,
                    }}
                >
                    Atención personalizada para tu recuperación y bienestar
                </p>

                {/* Cards */}
                <Row gutter={[24, 24]}>
                    {services.map((service) => (
                        <Col xs={24} md={8} key={service.title}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        loading="lazy"
                                        style={{ height: 220, objectFit: "cover" }}
                                    />
                                }
                            >
                                <Card.Meta
                                    title={service.title}
                                    description={service.description}
                                />

                                <div style={{ marginTop: 20 }}>
                                    <Link to="/servicios">
                                        <Button
                                            type="link"
                                            style={{
                                                color: "#2E7D6F",
                                                paddingLeft: 0,
                                            }}
                                        >
                                            Ver más
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Bottom CTA */}
                <div style={{ textAlign: "center", marginTop: 40 }}>
                    <Link to="/servicios">
                        <Button
                            type="primary"
                            size="large"
                            style={{
                                background: "#2E7D6F",
                                borderColor: "#2E7D6F",
                            }}
                        >
                            Ver todos los servicios
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}