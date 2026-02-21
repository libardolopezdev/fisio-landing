import logo from "../../assets/images/logo.png"
import {
  Layout,
  Menu,
  Row,
  Col,
  Drawer,
  Button,
  Grid
} from "antd"
import { MenuOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useState } from "react"

const { Header } = Layout
const { useBreakpoint } = Grid

// 🎨 Cambia estos dos números para ajustar el logo y la franja blanca de forma independiente
const LOGO_HEIGHT = 180   // ← tamaño del logo (solo cambia este número)
const HEADER_HEIGHT = 50  // ← alto de la franja blanca (solo cambia este número)

const menuItems = [
  { key: "home", label: <Link to="/">Inicio</Link> },
  { key: "services", label: <Link to="/servicios">Servicios</Link> },
  { key: "about", label: <Link to="/sobre-mi">Sobre mí</Link> },
  { key: "contact", label: <Link to="/contacto">Contacto</Link> }
]

export default function HeaderBar() {

  const screens = useBreakpoint()
  const isMobile = !screens.md
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header
        style={{
          background: "#fff",
          padding: "0 16px",
          height: HEADER_HEIGHT,
          display: "flex",
          alignItems: "center",
          lineHeight: "normal",
          paddingInline: 16,
          position: "sticky",
          top: 0,
          zIndex: 100,
          overflow: "visible",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
        }}
      >
        <Row align="middle" justify="space-between" style={{ width: "100%", margin: 0, padding: "0 8px" }}>

          <Col style={{ display: "flex", alignItems: "center" }}>
            <Link to="/" style={{ display: "flex" }}>
              <img
                src={logo}
                alt="FisioSalud"
                style={{
                  height: LOGO_HEIGHT,
                  width: "auto",
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </Link>
          </Col>

          {!isMobile && (
            <Col style={{ display: "flex", alignItems: "center" }}>
              <Menu
                mode="horizontal"
                selectable={false}
                items={menuItems}
                overflowedIndicator={null}
                style={{
                  borderBottom: "none",
                  fontSize: 16,
                  fontWeight: 500,
                  minWidth: 400
                }}
              />
            </Col>
          )}

          {isMobile && (
            <Button
              icon={<MenuOutlined style={{ fontSize: 20, color: "#2E7D6F" }} />}
              onClick={() => setOpen(true)}
              style={{
                border: "none",
                boxShadow: "none",
                background: "#f0f7f5",        // ← fondo verde muy suave
                borderRadius: 8,
                width: 40,
                height: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            />
          )}

        </Row>
      </Header>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </>
  )
}