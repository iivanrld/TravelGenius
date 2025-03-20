import { useState } from 'react'
import { Menu, X, MessageSquare, Map, Camera, DollarSign, Share2 } from "lucide-react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <a href="/" className="logo-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="logo-icon"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
            </svg>
            <span className="site-title">TripGenius</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <a href="/chatbot" className="nav-link">
              <MessageSquare className="nav-icon" />
              <span>Asistente IA</span>
            </a>
            <a href="/rutas" className="nav-link">
              <Map className="nav-icon" />
              <span>Rutas</span>
            </a>
            <a href="/album" className="nav-link">
              <Camera className="nav-icon" />
              <span>Álbum</span>
            </a>
            <a href="/presupuesto" className="nav-link">
              <DollarSign className="nav-icon" />
              <span>Presupuesto</span>
            </a>
            <a href="/compartir" className="nav-link">
              <Share2 className="nav-icon" />
              <span>Compartir</span>
            </a>
          </nav>

          {/* User Actions */}
          <div className="header-actions">
            <a href="/login" className="login-button">
              Iniciar Sesión
            </a>
            <a href="/registro" className="register-button">
              Registrarse
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a href="/chatbot" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <MessageSquare className="nav-icon" />
              <span>Asistente IA</span>
            </a>
            <a href="/rutas" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <Map className="nav-icon" />
              <span>Rutas</span>
            </a>
            <a href="/album" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <Camera className="nav-icon" />
              <span>Álbum</span>
            </a>
            <a href="/presupuesto" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <DollarSign className="nav-icon" />
              <span>Presupuesto</span>
            </a>
            <a href="/compartir" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              <Share2 className="nav-icon" />
              <span>Compartir</span>
            </a>
            <div className="mobile-auth">
              <a href="/login" className="mobile-login-button" onClick={() => setIsMenuOpen(false)}>
                Iniciar Sesión
              </a>
              <a href="/registro" className="mobile-register-button" onClick={() => setIsMenuOpen(false)}>
                Registrarse
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header