import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { CardContextProvider } from './context/questionnarie-context.tsx'

createRoot(document.getElementById('root')!).render(
  <CardContextProvider>
    <App />
  </CardContextProvider>
)
