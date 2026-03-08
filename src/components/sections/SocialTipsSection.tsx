import { Typography } from 'antd'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

type Platform = 'tiktok' | 'instagram' | 'facebook'

const socialItems: { platform: Platform; id: string; url: string; label: string }[] = [
    {
        platform: 'tiktok',
        id: '7596469175149726994',
        url: 'https://www.tiktok.com/@ft.camilasuarez/video/7596469175149726994',
        label: 'TikTok'
    },
    {
        platform: 'instagram',
        id: 'instagram-1',
        url: 'https://www.instagram.com/ft.camilasuarez/',
        label: 'Instagram'
    },
    {
        platform: 'facebook',
        id: 'facebook-1',
        url: 'https://www.facebook.com/ximenacamila.suarezpedroza',
        label: 'Facebook'
    }
]

const platformColors = {
    tiktok: '#010101',
    instagram: '#E1306C',
    facebook: '#1877F2'
}

function SocialCard({ item }: { item: typeof socialItems[0] }) {
    const [thumbnail, setThumbnail] = useState<string | null>(null)

    useEffect(() => {
        if (item.platform === 'tiktok') {
            fetch(`https://www.tiktok.com/oembed?url=${item.url}`)
                .then(res => res.json())
                .then(data => { if (data.thumbnail_url) setThumbnail(data.thumbnail_url) })
                .catch(() => { })
        }
    }, [item])

    const getIcon = () => {
        if (item.platform === 'instagram') return <InstagramOutlined />
        if (item.platform === 'facebook') return <FacebookOutlined />
        return <span style={{ fontSize: 14, fontWeight: 800 }}>d</span> // TikTok 'd' logo simplified
    }

    return (
        <motion.a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover="hover"
            style={{
                display: 'block',
                width: 300,
                height: 530,
                borderRadius: 12,
                overflow: 'hidden',
                position: 'relative',
                background: thumbnail ? `url(${thumbnail}) center/cover no-repeat` : '#222',
                boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                cursor: 'pointer',
                textDecoration: 'none',
            }}
            variants={{
                hover: {
                    y: -8,
                    boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                }
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
            {/* Dark overlay */}
            <motion.div
                variants={{
                    hover: { background: 'rgba(0,0,0,0.45)' }
                }}
                initial={{ background: 'rgba(0,0,0,0.25)' }}
                style={{
                    position: 'absolute',
                    inset: 0,
                    transition: 'background 0.25s ease',
                }}
            />

            {/* Play button or Platform icon centered */}
            <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <motion.div
                    variants={{
                        hover: { scale: 1.15 }
                    }}
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.95)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 32,
                        color: platformColors[item.platform],
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        transition: 'transform 0.25s ease',
                    }}
                >
                    {item.platform === 'tiktok' ? '▶' : getIcon()}
                </motion.div>
            </div>

            {/* Platform badge */}
            <div style={{
                position: 'absolute',
                bottom: 14,
                right: 14,
                background: platformColors[item.platform],
                borderRadius: 6,
                padding: '6px 12px',
                color: 'white',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 6
            }}>
                {getIcon()}
                {item.label}
            </div>
        </motion.a>
    )
}

export default function SocialTipsSection() {
    return (
        <section style={{ padding: '64px 20px', background: '#fff' }}>
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: 8 }}>
                    Tips de fisioterapia
                </Title>
                <Paragraph style={{ textAlign: 'center', color: '#666', marginBottom: 48 }}>
                    Sígueme en mis redes sociales para más consejos y ejercicios diarios
                </Paragraph>

                <div style={{ display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {socialItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                        >
                            <SocialCard item={item} />
                        </motion.div>
                    ))}
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 32,
                    marginTop: 48,
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="https://www.tiktok.com/@ft.camilasuarez"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#2E7D6F', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                        Más en TikTok →
                    </a>
                    <a
                        href="https://www.instagram.com/ft.camilasuarez/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#E1306C', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                        Más en Instagram →
                    </a>
                    <a
                        href="https://www.facebook.com/ximenacamila.suarezpedroza"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1877F2', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}
                    >
                        Más en Facebook →
                    </a>
                </div>
            </div>
        </section>
    )
}
