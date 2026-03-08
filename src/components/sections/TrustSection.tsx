import { Row, Col, Typography, Card } from 'antd'
import { motion } from 'framer-motion'
import Counter from '../common/Counter'

const { Title } = Typography

const stats = [
    { value: 20000, suffix: "+", label: "Pacientes atendidos" },
    { value: 7, suffix: "+", label: "Años de experiencia" },
    { value: 2, suffix: "", label: "Especialidades" }
]

export default function TrustSection() {
    return (
        <section style={{ background: "#f9f9f9", padding: "64px 20px" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>

                {/* Stats */}
                <Row gutter={[24, 24]} justify="center" style={{ marginBottom: 48 }}>
                    {stats.map((stat, i) => (
                        <Col
                            key={i}
                            xs={24}      // ✅ móvil: una por fila
                            sm={12}
                            md={8}       // ✅ tablet/desktop
                            lg={6}
                            style={{ textAlign: "center" }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                            >
                                <div
                                    style={{
                                        fontSize: "clamp(26px, 6vw, 40px)", // ✅ responsive
                                        fontWeight: 700,
                                        color: "#2E7D6F"
                                    }}
                                >
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </div>

                                <div
                                    style={{
                                        fontSize: "clamp(13px, 3.5vw, 14px)",
                                        color: "#666"
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                {/* Card */}
                <Row justify="center">
                    <Col xs={24} md={14}>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <Card>
                                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                    <Title level={3}>
                                        Atención profesional y personalizada
                                    </Title>

                                    <div style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.6 }}>
                                        <p style={{ marginBottom: 16 }}>Soy fisioterapeuta certificada, enfocada en la recuperación funcional y el bienestar integral de cada paciente. A diferencia de la atención masiva que ofrecen las EPS, donde el tiempo es limitado y los tratamientos son genéricos, aquí cada sesión se diseña exclusivamente para ti: tu cuerpo, tu ritmo y tus objetivos. Los resultados hablan por sí solos, porque una recuperación verdadera comienza con atención de calidad, no con cantidad.</p>

                                        <p>Trabajo con técnicas basadas en evidencia para mejorar tu calidad de vida a largo plazo.</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}