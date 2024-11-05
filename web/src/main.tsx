import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/global.css'
import { App } from './app.tsx'

const contentElement = document.getElementById('root') as HTMLElement

createRoot(contentElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
