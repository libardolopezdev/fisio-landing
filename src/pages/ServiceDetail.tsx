import { useParams } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

import { getServiceBySlug } from '../data/services'
import { buildWhatsAppUrl } from '../utils/whatsapp'

const { Title, Paragraph } = Typography

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>()
  const service = getServiceBySlug(id)

  if (!service) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 20px' }}>
        <Title level={2}>Servicio no encontrado</Title>
        <Paragraph>El servicio que buscas no existe.</Paragraph>
      </div>
    )
  }

  const whatsappUrl = buildWhatsAppUrl(
    'Hola Camila, me gustaría consultar sobre el servicio de ' + service.title + '.',
  )

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '140px 20px' }}>
      <img
        src={service.img}
        alt={service.title}
        style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 16, marginBottom: 40 }}
      />

      <Title style={{ color: '#2E7D6F' }}>{service.title}</Title>

      <Paragraph style={{ fontSize: 17, lineHeight: 1.8, marginBottom: 32 }}>
        {service.details}
      </Paragraph>

      <div style={{ background: '#f9f9f9', borderRadius: 12, padding: 32, marginBottom: 32 }}>
        <Title level={4} style={{ color: '#2E7D6F', marginBottom: 16 }}>
          Beneficios
        </Title>
        {service.benefits.map((benefit, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <CheckCircleOutlined style={{ color: '#2E7D6F', fontSize: 18 }} />
            <span style={{ fontSize: 16 }}>{benefit}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 32, marginBottom: 40, flexWrap: 'wrap' }}>
        <div style={{ background: '#f0f7f5', borderRadius: 12, padding: '16px 24px', flex: 1 }}>
          <Title level={5} style={{ color: '#2E7D6F', marginBottom: 4 }}>
            Duración
          </Title>
          <Paragraph style={{ margin: 0, fontSize: 16 }}>{service.duration}</Paragraph>
        </div>
        <div style={{ background: '#f0f7f5', borderRadius: 12, padding: '16px 24px', flex: 1 }}>
          <Title level={5} style={{ color: '#2E7D6F', marginBottom: 4 }}>
            Ideal para
          </Title>
          <Paragraph style={{ margin: 0, fontSize: 16 }}>{service.ideal}</Paragraph>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <Button
            type="primary"
            size="large"
            style={{
              background: '#2E7D6F',
              borderColor: '#2E7D6F',
              height: 50,
              fontSize: 16,
              paddingInline: 40,
            }}
          >
            Consultar por WhatsApp
          </Button>
        </a>
      </div>
    </div>
  )
}
