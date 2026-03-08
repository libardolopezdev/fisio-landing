import { Card, Row, Col, Button } from 'antd'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { services } from '../../data/services'

const featuredServices = services.slice(0, 3)

export default function ServicesSection() {
  return (
    <section id="services" style={{ padding: '60px 0', background: '#f9f9f9' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
        <h2
          style={{
            textAlign: 'center',
            fontSize: 32,
            marginBottom: 8,
            fontWeight: 700,
          }}
        >
          Mis servicios
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: '#666',
            marginBottom: 40,
          }}
        >
          Atención personalizada para tu recuperación y bienestar
        </p>

        <Row gutter={[24, 24]}>
          {featuredServices.map((service, i) => (
            <Col xs={24} md={8} key={service.slug}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      src={service.img}
                      alt={service.title}
                      loading="lazy"
                      style={{ height: 220, objectFit: 'cover' }}
                    />
                  }
                >
                  <Card.Meta title={service.title} description={service.shortDescription} />

                  <div style={{ marginTop: 20 }}>
                    <Link to={'/servicios/' + service.slug}>
                      <Button type="link" style={{ color: '#2E7D6F', paddingLeft: 0 }}>
                        Ver más
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <Link to="/servicios">
            <Button
              type="primary"
              size="large"
              style={{
                background: '#2E7D6F',
                borderColor: '#2E7D6F',
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
