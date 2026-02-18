import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout

export default function HeaderBar() {
  return (
    <Header
      style={{
        background: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ fontWeight: 700, fontSize: 20, color: '#2E7D6F' }}>
        FisioSalud
      </Link>

      <Menu
        mode="horizontal"
        items={[
          { key: 'home', label: <Link to="/">Inicio</Link> },
          { key: 'services', label: <Link to="/servicios">Servicios</Link> },
          { key: 'about', label: <Link to="/sobre-mi">Sobre mí</Link> },
          { key: 'contact', label: <Link to="/contacto">Contacto</Link> },
        ]}
        style={{ borderBottom: 'none' }}
      />
    </Header>
  )
}
