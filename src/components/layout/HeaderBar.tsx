import logo from '../../assets/images/logo.png'
import { Layout, Menu, Row, Col, Drawer, Button, Grid } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { buildWhatsAppUrl } from '../../utils/whatsapp'

const { Header } = Layout
const { useBreakpoint } = Grid

const HEADER_HEIGHT = 100

const menuItems = [
  { key: 'home', label: <Link to="/">Inicio</Link> },
  { key: 'services', label: <Link to="/servicios">Servicios</Link> },
  { key: 'about', label: <Link to="/sobre-mi">Sobre mí</Link> },
  { key: 'contact', label: <Link to="/contacto">Contacto</Link> },
]

function resolveActiveMenuKey(pathname: string) {
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/servicios')) return 'services'
  if (pathname.startsWith('/sobre-mi')) return 'about'
  if (pathname.startsWith('/contacto')) return 'contact'
  return ''
}

export default function HeaderBar() {
  const screens = useBreakpoint()
  const isMobile = !screens.md
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const activeKey = useMemo(() => resolveActiveMenuKey(pathname), [pathname])

  return (
    <>
      <Header
        style={{
          background: '#ffffff',
          padding: 0,
          height: HEADER_HEIGHT,
          display: 'block',
          position: 'fixed',
          width: '100%',
          top: 0,
          zIndex: 100,
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          overflow: 'visible',
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 40px',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <Row align="middle" style={{ width: '100%', margin: 0 }}>
            {/* Col 1: Logo */}
            <Col flex="none">
              <Link to="/" style={{ display: 'flex' }}>
                <img
                  src={logo}
                  alt="FisioSalud"
                  style={{
                    height: 130,
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    position: 'relative',
                    zIndex: 10,
                    marginTop: -30,
                    marginBottom: -40,
                    filter: 'drop-shadow(0 4px 10px rgba(0,0,0,0.12))',
                  }}
                />
              </Link>
            </Col>

            {/* Col 2: Menu centrado */}
            {!isMobile && (
              <Col flex="1" style={{ display: 'flex', justifyContent: 'center' }}>
                <Menu
                  mode="horizontal"
                  selectedKeys={activeKey ? [activeKey] : []}
                  items={menuItems}
                  overflowedIndicator={null}
                  className="menu-dark"
                  style={{
                    background: 'transparent',
                    borderBottom: 'none',
                    fontSize: 15,
                    fontWeight: 500,
                    minWidth: 350,
                  }}
                />
              </Col>
            )}

            {/* Col 3: Botón CTA o Botón Móvil */}
            {!isMobile && (
              <Col flex="none">
                <Button
                  size="middle"
                  href={buildWhatsAppUrl('Hola Camila, quiero agendar una cita')}
                  target="_blank"
                  style={{
                    background: '#2E7D6F',
                    color: 'white',
                    border: '1.5px solid #2E7D6F',
                    borderRadius: 24,
                    fontWeight: 600,
                    paddingInline: 20,
                  }}
                >
                  Agendar cita
                </Button>
              </Col>
            )}

            {isMobile && (
              <Col flex="none" style={{ marginLeft: 'auto' }}>
                <Button
                  icon={<MenuOutlined style={{ fontSize: 20, color: '#2E7D6F' }} />}
                  onClick={() => setOpen(true)}
                  style={{
                    border: 'none',
                    boxShadow: 'none',
                    background: '#f0f7f5',
                    borderRadius: 8,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </Col>
            )}
          </Row>
        </div>
      </Header>

      <Drawer placement="right" open={open} onClose={() => setOpen(false)}>
        <Menu mode="vertical" selectedKeys={activeKey ? [activeKey] : []} items={menuItems} onClick={() => setOpen(false)} />
      </Drawer>
    </>
  )
}
