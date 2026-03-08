import { Row, Col, Typography, Button } from 'antd'
import { motion } from 'framer-motion'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

const { Title, Paragraph } = Typography

export default function CTASection() {
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        background: '#f7faf9',
        padding: '100px 16px',
      }}
    >
      <Col xs={24} md={12} style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}
        >
          <Title level={2} style={{ color: '#1a2e1f' }}>Da el primer paso hacia tu recuperación</Title>

          <Paragraph style={{ fontSize: 16, color: '#4a5568' }}>
            Agenda tu cita hoy mismo y comienza tu proceso de recuperación con acompañamiento
            profesional.
          </Paragraph>

          <div>
            <Button
              type="primary"
              size="large"
              href={buildWhatsAppUrl('Hola Camila, me gustaría agendar una cita.')}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#2E7D6F',
                color: 'white',
                borderColor: '#2E7D6F',
                fontWeight: 600
              }}
            >
              Contactar por WhatsApp
            </Button>
          </div>
        </motion.div>
      </Col>
    </Row>
  )
}
