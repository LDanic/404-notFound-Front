import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Custom from './components/Custom.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Custom />
  </StrictMode>,
)
