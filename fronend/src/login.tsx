import React from 'react'
import ReactDOM from 'react-dom/client'
import LogApp from './LogApp'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LogApp />
  </React.StrictMode>,
)
