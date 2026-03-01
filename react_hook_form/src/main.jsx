import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import FormAntigo from './FormAntigo.jsx'
import FormNovo from './FormNovo.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormAntigo />
    <FormNovo />
  </StrictMode>
)
