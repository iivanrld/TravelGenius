import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './Login.jsx'
import Registro from './Registro.jsx'

// Importar las imágenes para asegurarnos de que Vite las procese
import './img/Coliseo.jpg'
import './img/Japon.jpg'
import './img/Palacio-viena.jpg'
import './img/RD.jpg'

const path = window.location.pathname;

const App = () => {
  if (path === '/registro') {
    return <Registro />
  }
  return <Login />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)