import { Row, Col, Typography, Button } from 'antd'

const { Title, Paragraph } = Typography

export default function CTASection() {
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                background: '#f5f5f5',
                padding: '64px 16px',
            }}
        >
            <Col xs={24} md={12} style={{ textAlign: 'center' }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 24, width: "100%" }}>
                    <Title level={2}>
                        Da el primer paso hacia tu recuperación
                    </Title>

                    <Paragraph style={{ fontSize: 16 }}>
                        Agenda tu cita hoy mismo y comienza tu proceso
                        de recuperación con acompañamiento profesional.
                    </Paragraph>

                    <div>
                        <Button
                            type="primary"
                            size="large"
                            href={'https://wa.me/573188095343?text=' + encodeURIComponent('Hola Camila, me gustaría agendar una cita.')}
                            target="_blank"
                            style={{ background: '#2E7D6F', borderColor: '#2E7D6F' }}
                        >
                            Contactar por WhatsApp
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}