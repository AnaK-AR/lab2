import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppCounter } from './AppCounter.jsx'
import { Card } from './Components/Card.jsx'
import { CustomHook } from './Components/CustomHook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomHook></CustomHook>
  </StrictMode>,
)
