import { Card, Col, Row, Typography, Button } from 'antd'
import { Link } from 'react-router-dom'

import rehab from "../assets/images/rehabilitacion-fisica.png"
import preventiva from "../assets/images/fisioterapia-preventiva.png"
import masaje from "../assets/images/masaje-descontracturante.png"
import pelvico from "../assets/images/piso-pelvico.png"
import estetico from "../assets/images/tratamiento-estetico.png"
import cauterizacion from "../assets/images/cauterizacion.png"
import depilacion from "../assets/images/depilacion-cera.png"

const { Title, Paragraph } = Typography

const services = [
  { title: 'Rehabilitación física', slug: 'rehabilitacion-fisica', img: rehab, description: 'Tratamiento especializado de lesiones osteomusculares y postquirúrgicas para recuperar tu funcionalidad y calidad de vida.' },
  { title: 'Fisioterapia preventiva', slug: 'fisioterapia-preventiva', img: preventiva, description: 'Programas diseñados para prevenir lesiones, mejorar tu postura y mantener tu salud física a largo plazo.' },
  { title: 'Masaje descontracturante', slug: 'masaje-descontracturante', img: masaje, description: 'Técnica terapéutica para aliviar tensiones musculares, reducir el dolor y mejorar la circulación.' },
  { title: 'Rehabilitación de piso pélvico', slug: 'rehabilitacion-piso-pelvico', img: pelvico, description: 'Atención especializada para disfunciones del suelo pélvico en hombres y mujeres, mejorando tu calidad de vida.' },
  { title: 'Tratamiento estético', slug: 'tratamiento-estetico', img: estetico, description: 'Limpieza facial superficial y profunda, y tratamiento con dermapen para rejuvenecimiento y cuidado de la piel.' },
  { title: 'Cauterización de verrugas', slug: 'cauterizacion-verrugas', img: cauterizacion, description: 'Eliminación segura y profesional de pequeñas verrugas mediante electrocirugía.' },
  { title: 'Depilación con cera fría', slug: 'depilacion-cera-fria', img: depilacion, description: 'Depilación de axilas con cera fría, un método seguro, eficaz y de larga duración.' }
]

export default function Services() {
  const whatsappUrl = 'https://wa.me/573188095343?text=' + encodeURIComponent('Hola Camila, me gustaría consultar sobre un servicio.')

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 20px' }}>

      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title>Mis servicios</Title>
        <Paragraph style={{ fontSize: 16, color: '#666' }}>
          Cada tratamiento se adapta a tus necesidades específicas, con un
          enfoque profesional, humano y basado en evidencia.
        </Paragraph>
      </div>

      <Row gutter={[24, 24]} justify="center">
        {services.map((service) => (
          <Col xs={24} md={12} lg={8} key={service.title}>
            <Link to={'/servicios/' + service.slug} style={{ display: 'block', height: '100%' }}>
              <Card
                hoverable
                style={{ height: '100%', borderRadius: 12 }}
                cover={
                  <img
                    src={service.img}
                    alt={service.title}
                    loading="lazy"
                    style={{ height: 220, objectFit: 'cover', borderRadius: '12px 12px 0 0' }}
                  />
                }
              >
                <Title level={5} style={{ marginBottom: 8 }}>{service.title}</Title>
                <Paragraph style={{ color: '#555' }}>{service.description}</Paragraph>
                <Button type="link" style={{ color: '#2E7D6F', paddingLeft: 0 }}>
                  Ver detalle →
                </Button>
              </Card>
            </Link>
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