import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title: string
    description: string
    canonical?: string
    children?: React.ReactNode
}

export default function SEO({ title, description, canonical, children }: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}
            {children}
        </Helmet>
    )
}
