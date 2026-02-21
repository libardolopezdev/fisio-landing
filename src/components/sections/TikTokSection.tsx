import { Typography } from 'antd'
import { useEffect } from 'react'

const { Title, Paragraph } = Typography

const videos = [
    "7596469175149726994",
    "7540500054969306374",
    "7541991780263267640"
]

export default function TikTokSection() {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://www.tiktok.com/embed.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <section style={{ padding: "60px 20px", background: "#fff" }}>
            <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <Title level={2} style={{ textAlign: "center", marginBottom: 8 }}>
                    Tips de fisioterapia
                </Title>
                <Paragraph style={{ textAlign: "center", color: "#666", marginBottom: 40 }}>
                    Consejos profesionales para cuidar tu cuerpo y mejorar tu bienestar
                </Paragraph>
                <div style={{ display: "flex", gap: 24, justifyContent: "center", flexWrap: "wrap" }}>
                    {videos.map((id) => (
                        <blockquote
                            key={id}
                            className="tiktok-embed"
                            cite={'https://www.tiktok.com/@ft.camilasuarez/video/' + id}
                            data-video-id={id}
                            style={{ maxWidth: 325, minWidth: 325 }}
                        >
                            <section />
                        </blockquote>
                    ))}
                </div>
                <div style={{ textAlign: "center", marginTop: 32 }}>
                    <a
                        href="https://www.tiktok.com/@ft.camilasuarez"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#2E7D6F", fontWeight: 600, fontSize: 16, textDecoration: "underline" }}
                    >
                        Ver más videos en TikTok →
                    </a>
                </div>
            </div>
        </section>
    )
}
