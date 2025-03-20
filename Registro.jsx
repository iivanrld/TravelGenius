import { useState } from 'react'
import './App.css'
import Header from './components/Header'

function Registro() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validatePassword = (value) => {
    if (value.length < 8) {
      return "La contraseña debe tener al menos 8 caracteres"
    }
    if (!/[A-Z]/.test(value)) {
      return "La contraseña debe tener al menos una letra mayúscula"
    }
    if (!/\d/.test(value)) {
      return "La contraseña debe tener al menos un número"
    }
    return ""
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const error = validatePassword(password)
    if (error) {
      setErrors({ ...errors, password: error })
      return
    }
    console.log({ username, email, password })
  }

  return (
    <div className="page-container">
      <Header />
      <div className="container">
        <div className="form-card">
          <h2>Crear Cuenta</h2>
          <p>Ingresa tus datos para registrarte</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Nombre de usuario</label>
              <input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

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
                onChange={(e) => {
                  setPassword(e.target.value)
                  const error = validatePassword(e.target.value)
                  setErrors({ ...errors, password: error })
                }}
                required
              />
              {errors.password && (
                <div className="error-message">
                  {errors.password}
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-1">
                La contraseña debe tener al menos 8 caracteres, una letra mayúscula y un número.
              </p>
            </div>

            <button type="submit" className="submit-button">
              Crear Cuenta
            </button>
            
            <p className="login-link">
              ¿Ya tienes una cuenta?{" "}
              <a href="/login" onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, "", "/login");
                window.location.reload();
              }}>
                Iniciar Sesión
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Registro