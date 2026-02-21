import { Layout } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HeaderBar from './components/layout/HeaderBar'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'
import WhatsAppButton from './components/common/WhatsAppButton'

const { Content, Footer } = Layout

function App() {
  return (
    <BrowserRouter>
      <Layout style={{ minHeight: '100vh' }}>

        <HeaderBar />

        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/sobre-mi" element={<About />} />
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