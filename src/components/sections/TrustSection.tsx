import { Row, Col, Typography, Card } from 'antd'

const { Title, Paragraph } = Typography

const stats = [
    { number: "20.000+", label: "Pacientes atendidos" },
    { number: "7+", label: "Años de experiencia" },
    { number: "2", label: "Especialidades" }
]

export default function TrustSection() {
    return (
        <section style={{ background: "#f9f9f9", padding: "64px 20px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 48 }}>
                    {stats.map((stat, i) => (
                        <Col xs={8} md={6} key={i} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: 40, fontWeight: 700, color: "#4a9b6f" }}>
                                {stat.number}
                            </div>
                            <div style={{ fontSize: 14, color: "#666" }}>
                                {stat.label}
                            </div>
                        </Col>
                    ))}
                </Row>

                <Row justify="center">
                    <Col xs={24} md={14}>
                        <Card>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                <Title level={3}>
                                    Atención profesional y personalizada
                                </Title>
                                <Paragraph>
                                    Soy fisioterapeuta certificada, enfocada en la recuperación funcional y el
                                    bienestar integral de cada paciente. A diferencia de la atención masiva que
                                    ofrecen las EPS, donde el tiempo es limitado y los tratamientos son genéricos,
                                    aquí cada sesión se diseña exclusivamente para ti: tu cuerpo, tu ritmo y tus
                                    objetivos. Los resultados hablan por sí solos, porque una recuperación
                                    verdadera comienza con atención de calidad, no con cantidad.
                                </Paragraph>
                                <Paragraph>
                                    Trabajo con técnicas basadas en evidencia para mejorar
                                    tu calidad de vida a largo plazo.
                                </Paragraph>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </div>
        </section>
    )
}