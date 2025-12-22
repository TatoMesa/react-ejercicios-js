import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Aquí es donde está tu índice y navegación
import './index.css'   // Tus estilos globales

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)