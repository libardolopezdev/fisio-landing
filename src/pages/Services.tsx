import { Card, Col, Row, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { services } from '../data/services'
import { buildWhatsAppUrl } from '../utils/whatsapp'
import SEO from '../components/common/SEO'

const { Title, Paragraph } = Typography

export default function Services() {
  const whatsappUrl = buildWhatsAppUrl('Hola Camila, me gustaría consultar sobre un servicio.')

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '140px 20px' }}>
      <SEO
        title="Servicios de Fisioterapia en Medellín | Ft. Camila Suarez"
        description="Terapia manual, rehabilitación física, piso pélvico, masaje descontracturante y fisioterapia preventiva en Medellín. Atención personalizada."
        canonical="https://fisiocami.netlify.app/servicios"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 48 }}
      >
        <Title>Mis servicios</Title>
        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          Cada tratamiento se adapta a tus necesidades específicas, con un enfoque profesional,
          humano y basado en evidencia.
        </Paragraph>
      </motion.div>

      <Row gutter={[24, 24]} justify="center">
        {services.map((service, i) => (
          <Col xs={24} md={12} lg={8} key={service.slug}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{ height: '100%' }}
            >
              <Link to={'/servicios/' + service.slug} style={{ display: 'block', height: '100%' }}>
                <Card
                  hoverable
                  style={{ height: '100%', borderRadius: 12, overflow: 'hidden' }}
                  cover={
                    <img
                      src={service.img}
                      alt={service.title}
                      loading="lazy"
                      style={{ height: 220, objectFit: 'cover' }}
                    />
                  }
                >
                  <Title level={5} style={{ marginBottom: 8 }}>
                    {service.title}
                  </Title>
                  <Paragraph style={{ color: '#555' }}>{service.shortDescription}</Paragraph>
                  <Button type="link" style={{ color: '#2E7D6F', paddingLeft: 0 }}>
                    Ver detalle →
                  </Button>
                </Card>
              </Link>
            </motion.div>
          </Col>
        ))}
      </Row>

      <div style={{ textAlign: 'center', marginTop: 64 }}>
        <Title level={3}>¿Necesitas orientación sobre tu caso?</Title>
        <Paragraph style={{ fontSize: 16, marginBottom: 24 }}>
          Escríbeme y te ayudaré a elegir el tratamiento adecuado.
        </Paragraph>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button type="primary" size="large" style={{ background: '#2E7D6F', borderColor: '#2E7D6F' }}>
            Contactar por WhatsApp
          </Button>
        </a>
      </div>
    </div>
  )
}
