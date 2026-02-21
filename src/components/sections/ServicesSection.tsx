import { Card, Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'

import rehab from "../../assets/images/rehabilitacion-fisica.png"
import preventiva from "../../assets/images/fisioterapia-preventiva.png"
import masaje from "../../assets/images/masaje-descontracturante.png"

const services = [
    { title: "Rehabilitación física", img: rehab, description: "Tratamiento de lesiones osteomusculares y postquirúrgicas para recuperar tu funcionalidad." },
    { title: "Fisioterapia preventiva", img: preventiva, description: "Programas para prevenir lesiones y mantener tu salud física a largo plazo." },
    { title: "Masaje descontracturante", img: masaje, description: "Técnica para aliviar tensiones musculares, reducir dolor y mejorar la circulación." }
]

export default function ServicesSection() {
    return (
        <section style={{ padding: "60px 0", background: "#f9f9f9" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>

                <h2 style={{ textAlign: "center", fontSize: 32, marginBottom: 8, fontWeight: 700 }}>
                    Mis servicios
                </h2>
                <p style={{ textAlign: "center", color: "#666", marginBottom: 40 }}>
                    Atención personalizada para tu recuperación y bienestar
                </p>

                <Row gutter={[24, 24]}>
                    {services.map((service, i) => (
                        <Col xs={24} md={8} key={i}>
                            <Card
                                hoverable
                                cover={
                                    <img src={service.img} alt={service.title} loading="lazy"
                                        style={{ height: 220, objectFit: "cover" }} />
                                }
                                actions={[
                                    <Link to="/servicios">
                                        <Button type="link" style={{ color: "#2E7D6F" }}>Ver más</Button>
                                    </Link>
                                ]}
                            >
                                <Card.Meta title={service.title} description={service.description} />
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div style={{ textAlign: "center", marginTop: 40 }}>
                    <Link to="/servicios">
                        <Button type="primary" size="large" style={{ background: "#2E7D6F", borderColor: "#2E7D6F" }}>
                            Ver todos los servicios
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    )
}