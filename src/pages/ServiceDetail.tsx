import { useParams } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'

import rehab from "../assets/images/rehabilitacion-fisica.png"
import preventiva from "../assets/images/fisioterapia-preventiva.png"
import masaje from "../assets/images/masaje-descontracturante.png"
import pelvico from "../assets/images/piso-pelvico.png"
import estetico from "../assets/images/tratamiento-estetico.png"
import cauterizacion from "../assets/images/cauterizacion.png"
import depilacion from "../assets/images/depilacion-cera.png"

const { Title, Paragraph } = Typography

const services: Record<string, {
    title: string
    img: string
    description: string
    details: string
    benefits: string[]
    duration: string
    ideal: string
}> = {
    'rehabilitacion-fisica': {
        title: 'Rehabilitación física',
        img: rehab,
        description: 'Tratamiento especializado de lesiones osteomusculares y postquirúrgicas.',
        details: 'La rehabilitación física es un proceso terapéutico integral que busca restaurar la función, movilidad y calidad de vida de pacientes que han sufrido lesiones musculares, articulares o han sido sometidos a procedimientos quirúrgicos. A través de técnicas manuales, ejercicio terapéutico y modalidades físicas, trabajamos para que recuperes tu movimiento de forma segura y efectiva.',
        benefits: ['Recuperación funcional completa', 'Reducción del dolor', 'Prevención de lesiones futuras', 'Mejora de la movilidad articular', 'Fortalecimiento muscular progresivo'],
        duration: '45 - 60 minutos por sesión',
        ideal: 'Personas con lesiones musculares, esguinces, fracturas, cirugías ortopédicas o dolor crónico.'
    },
    'fisioterapia-preventiva': {
        title: 'Fisioterapia preventiva',
        img: preventiva,
        description: 'Programas diseñados para prevenir lesiones y mantener tu salud física.',
        details: 'La fisioterapia preventiva está enfocada en identificar y corregir desequilibrios musculares, malas posturas y factores de riesgo antes de que se conviertan en lesiones. A través de evaluaciones personalizadas y programas de ejercicio específicos, te ayudamos a mantener un cuerpo sano, fuerte y en equilibrio a largo plazo.',
        benefits: ['Prevención de lesiones', 'Corrección postural', 'Mejora del rendimiento físico', 'Mayor conciencia corporal', 'Hábitos saludables de movimiento'],
        duration: '45 minutos por sesión',
        ideal: 'Personas con trabajos sedentarios, deportistas, adultos mayores o quienes deseen mantener una buena salud física.'
    },
    'masaje-descontracturante': {
        title: 'Masaje descontracturante',
        img: masaje,
        description: 'Técnica terapéutica para aliviar tensiones musculares y reducir el dolor.',
        details: 'El masaje descontracturante es una técnica manual profunda que actúa directamente sobre las contracturas musculares, liberando la tensión acumulada en los tejidos. A diferencia de un masaje relajante, esta técnica trabaja en capas profundas del músculo para eliminar nudos de tensión, mejorar la circulación sanguínea y restaurar la elasticidad muscular.',
        benefits: ['Alivio inmediato del dolor muscular', 'Eliminación de contracturas', 'Mejora de la circulación', 'Reducción del estrés', 'Mayor flexibilidad y movilidad'],
        duration: '45 - 60 minutos por sesión',
        ideal: 'Personas con tensión muscular, estrés, dolor de espalda, cuello o hombros, y trabajadores con largas jornadas.'
    },
    'rehabilitacion-piso-pelvico': {
        title: 'Rehabilitación de piso pélvico',
        img: pelvico,
        description: 'Atención especializada para disfunciones del suelo pélvico.',
        details: 'La rehabilitación de piso pélvico es un tratamiento especializado que aborda las disfunciones de los músculos y tejidos que conforman el suelo pélvico. Esta área es fundamental para el control de la vejiga, el intestino y la función sexual. A través de técnicas específicas, ejercicios y educación, trabajamos para restaurar la función y mejorar tu calidad de vida de forma discreta y profesional.',
        benefits: ['Control de incontinencia urinaria', 'Reducción del dolor pélvico', 'Mejora de la función sexual', 'Recuperación postparto', 'Prevención de prolapsos'],
        duration: '45 - 60 minutos por sesión',
        ideal: 'Mujeres en postparto, personas con incontinencia urinaria, dolor pélvico crónico o disfunciones sexuales.'
    },
    'tratamiento-estetico': {
        title: 'Tratamiento estético',
        img: estetico,
        description: 'Limpieza facial y tratamiento con dermapen para el cuidado de la piel.',
        details: 'Nuestros tratamientos estéticos combinan limpieza facial profunda con técnicas avanzadas como el dermapen para rejuvenecer y mejorar la textura de tu piel. La limpieza facial elimina impurezas, puntos negros y células muertas, mientras que el dermapen estimula la producción de colágeno para reducir cicatrices, manchas y líneas de expresión, devolviéndole luminosidad y juventud a tu rostro.',
        benefits: ['Piel más luminosa y uniforme', 'Reducción de manchas y cicatrices', 'Estimulación de colágeno', 'Poros limpios y reducidos', 'Rejuvenecimiento facial'],
        duration: '60 - 90 minutos por sesión',
        ideal: 'Personas con acné, manchas, cicatrices, piel opaca o que buscan rejuvenecimiento facial.'
    },
    'cauterizacion-verrugas': {
        title: 'Cauterización de verrugas',
        img: cauterizacion,
        description: 'Eliminación segura y profesional de pequeñas verrugas mediante electrocirugía.',
        details: 'La cauterización de verrugas es un procedimiento médico-estético que utiliza corriente eléctrica de alta frecuencia para eliminar de forma segura y efectiva las verrugas pequeñas. El tejido indeseado es destruido mediante calor controlado, garantizando una eliminación precisa con mínimo daño al tejido circundante. El procedimiento es rápido, seguro y realizado bajo estrictos protocolos de higiene.',
        benefits: ['Eliminación definitiva de verrugas', 'Procedimiento rápido y seguro', 'Mínimo tiempo de recuperación', 'Resultados inmediatos', 'Protocolo de higiene estricto'],
        duration: '30 - 45 minutos por sesión',
        ideal: 'Personas con verrugas pequeñas en cualquier área del cuerpo que deseen eliminarlas de forma segura y profesional.'
    },
    'depilacion-cera-fria': {
        title: 'Depilación con cera fría',
        img: depilacion,
        description: 'Depilación de axilas con cera fría, un método seguro y de larga duración.',
        details: 'La depilación con cera fría es un método de depilación suave y efectivo que elimina el vello desde la raíz, proporcionando resultados duraderos de hasta 4 semanas. A diferencia de la cera caliente, la cera fría es menos agresiva con la piel, reduciendo el riesgo de irritación y quemaduras. Es ideal para pieles sensibles y garantiza una piel suave y libre de vello por más tiempo.',
        benefits: ['Resultados duraderos hasta 4 semanas', 'Menor irritación que la cera caliente', 'Vello crece más fino con el tiempo', 'Ideal para pieles sensibles', 'Piel suave e hidratada'],
        duration: '20 - 30 minutos por sesión',
        ideal: 'Personas que buscan una depilación duradera, suave y efectiva, especialmente con piel sensible.'
    }
}

export default function ServiceDetail() {
    const { id } = useParams<{ id: string }>()
    const service = id ? services[id] : null

    if (!service) {
        return (
            <div style={{ textAlign: 'center', padding: '100px 20px' }}>
                <Title level={2}>Servicio no encontrado</Title>
                <Paragraph>El servicio que buscas no existe.</Paragraph>
            </div>
        )
    }

    const whatsappUrl = 'https://wa.me/573188095343?text=' + encodeURIComponent(
        'Hola Camila, me gustaría consultar sobre el servicio de ' + service.title + '.'
    )

    return (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '60px 20px' }}>

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
                <Title level={4} style={{ color: '#2E7D6F', marginBottom: 16 }}>Beneficios</Title>
                {service.benefits.map((benefit, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                        <CheckCircleOutlined style={{ color: '#2E7D6F', fontSize: 18 }} />
                        <span style={{ fontSize: 16 }}>{benefit}</span>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', gap: 32, marginBottom: 40, flexWrap: 'wrap' }}>
                <div style={{ background: '#f0f7f5', borderRadius: 12, padding: '16px 24px', flex: 1 }}>
                    <Title level={5} style={{ color: '#2E7D6F', marginBottom: 4 }}>Duración</Title>
                    <Paragraph style={{ margin: 0, fontSize: 16 }}>{service.duration}</Paragraph>
                </div>
                <div style={{ background: '#f0f7f5', borderRadius: 12, padding: '16px 24px', flex: 1 }}>
                    <Title level={5} style={{ color: '#2E7D6F', marginBottom: 4 }}>Ideal para</Title>
                    <Paragraph style={{ margin: 0, fontSize: 16 }}>{service.ideal}</Paragraph>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button type="primary" size="large" style={{ background: '#2E7D6F', borderColor: '#2E7D6F', height: 50, fontSize: 16, paddingInline: 40 }}>
                        Consultar por WhatsApp
                    </Button>
                </a>
            </div>

        </div>
    )
}