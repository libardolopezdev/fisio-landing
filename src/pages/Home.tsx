import Hero from "../components/sections/Hero"
import ServicesSection from "../components/sections/ServicesSection"
import TrustSection from "../components/sections/TrustSection"
import CTASection from "../components/sections/CTASection"
import FadeInSection from "../components/common/FadeInSection"
import TikTokSection from "../components/sections/TikTokSection"

export default function Home() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Hero />

      <FadeInSection delay={0}>
        <ServicesSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <TrustSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <TikTokSection />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <CTASection />
      </FadeInSection>
    </div>
  )
}