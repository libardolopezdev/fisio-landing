import Hero from "../components/sections/Hero"
import ServicesSection from "../components/sections/ServicesSection"
import TrustSection from "../components/sections/TrustSection"
import CTASection from "../components/sections/CTASection"
import FadeInSection from "../components/common/FadeInSection"
import SocialTipsSection from "../components/sections/SocialTipsSection"
import SEO from "../components/common/SEO"

export default function Home() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <SEO
        title="Fisioterapia Personalizada en Medellín | Ft. Camila Suarez"
        description="Fisioterapeuta certificada en Medellín. Rehabilitación física, terapia manual, piso pélvico y más. +7 años de experiencia. Agenda por WhatsApp."
        canonical="https://fisiocami.netlify.app/"
      >
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Ft. Camila Suarez - Fisioterapia",
          "description": "Fisioterapia personalizada en Medellín. Rehabilitación física, terapia manual y piso pélvico.",
          "url": "https://fisiocami.netlify.app",
          "telephone": "+57-318-809-5343",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Medellín",
            "addressRegion": "Antioquia",
            "addressCountry": "CO"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 6.2442,
            "longitude": -75.5812
          },
          "openingHours": "Mo-Sa 07:00-19:00",
          "priceRange": "$$",
          "medicalSpecialty": "PhysicalTherapy",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5",
            "reviewCount": "87"
          }
        })}</script>
      </SEO>
      <Hero />

      <FadeInSection delay={0}>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <TrustSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <SocialTipsSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <CTASection />
      </FadeInSection>
    </div>
  )
}