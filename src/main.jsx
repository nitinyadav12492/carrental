import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { AppProvider } from './context/AppContext.jsx' // ✅ correct import

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>   {/* ✅ FIXED */}
      <App />
    </AppProvider>
  </BrowserRouter>
)