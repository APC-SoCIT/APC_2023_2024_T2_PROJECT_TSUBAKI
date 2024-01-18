import React from 'react'
import ReactDOM from 'react-dom/client'
import BookApp from './BookApp'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BookApp />
  </React.StrictMode>,
)
