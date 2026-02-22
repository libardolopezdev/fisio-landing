import { Layout } from 'antd'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

import HeaderBar from './components/layout/HeaderBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import WhatsAppButton from './components/common/WhatsAppButton'
import ServiceDetail from './pages/ServiceDetail'

const { Content, Footer } = Layout

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout style={{ minHeight: '100vh' }}>

        <HeaderBar />

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/servicios/:id" element={<ServiceDetail />} />
          </Routes>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} Ft. Camila Suarez · Todos los derechos reservados
        </Footer>

        <WhatsAppButton />

      </Layout>
    </BrowserRouter>
  )
}

export default App