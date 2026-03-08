import { Col, Typography, Button, Grid } from 'antd'
import { motion } from 'framer-motion'
import retrato from '../../assets/images/retrato-profesional.png'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

const { Title, Paragraph } = Typography
const { useBreakpoint } = Grid

const HEADER_HEIGHT = 100

export default function Hero() {
  const screens = useBreakpoint()

  const handleScrollToServices = () => {
    const section = document.getElementById('services')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    const url = buildWhatsAppUrl('Hola, quiero agendar una valoración fisioterapéutica')
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div
      style={{
        width: '100%',
        paddingTop: HEADER_HEIGHT,
        background: '#f7faf9',
        display: 'flex',
        justifyContent: 'center',
        paddingInline: 16,
      }}
    >
      {/* Card container: max-width, rounded corners, overflow hidden */}
      <div
        style={{
          width: '100%',
          maxWidth: 1200,
          height: 'clamp(660px, 90vh, 960px)',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 20,
          marginBottom: 24,
        }}
      >
        {/* Blurred background — fills the frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${retrato})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
            filter: 'blur(18px) brightness(0.6)',
            transform: 'scale(1.05)', /* avoid blur edge artifacts */
          }}
        />

        {/* Main photo — shown full / contained */}
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={retrato}
          alt="Fisioterapeuta Camila Suarez"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center 40%',
            filter: 'brightness(0.88)',
          }}
        />

        {/* Gradient overlay for text legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
          }}
        />

        {/* Text content — bottom-centred */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            padding: '0 24px 20px',
          }}
        >
          <Col
            xs={24}
            sm={22}
            md={18}
            lg={14}
            xl={12}
            style={{ textAlign: 'center', color: 'white' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Title
                style={{
                  color: 'white',
                  fontSize: screens.md ? '3rem' : '2rem',
                  marginBottom: '1rem',
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                Recupera tu movimiento y vive sin dolor
              </Title>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Paragraph
                  style={{
                    color: 'rgba(255, 255, 255, 0.88)',
                    fontSize: '1.1rem',
                    marginBottom: '2rem',
                    maxWidth: 520,
                    marginInline: 'auto',
                  }}
                >
                  Fisioterapia experta y personalizada en Medellín.
                  Tratamientos basados en evidencia para que vuelvas a lo que amas.
                </Paragraph>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Button
                  type="primary"
                  size="large"
                  onClick={handleWhatsApp}
                  style={{
                    height: 50,
                    paddingInline: 28,
                    borderRadius: 25,
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: '#2E7D6F',
                    borderColor: '#2E7D6F',
                  }}
                >
                  Agenda por WhatsApp
                </Button>
                <Button
                  size="large"
                  onClick={handleScrollToServices}
                  style={{
                    height: 50,
                    paddingInline: 28,
                    borderRadius: 25,
                    fontSize: '1rem',
                    fontWeight: 600,
                    background: 'transparent',
                    borderColor: 'white',
                    color: 'white',
                  }}
                >
                  Ver tratamientos
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </div>
      </div>
    </div>
  )
}
