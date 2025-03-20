import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password, rememberMe })
  }

  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <div className="form-card">
          <h2>Iniciar Sesión</h2>
          <p>Ingresa tus credenciales para acceder a tu cuenta</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Recordar mis datos</span>
              </label>
            </div>

            <button type="submit" className="submit-button">
              Iniciar Sesión
            </button>
            
            <p className="register-link">
              ¿No tienes una cuenta?{" "}
              <a href="/registro" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/registro");
                window.location.reload();
              }}>
                Regístrate
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login