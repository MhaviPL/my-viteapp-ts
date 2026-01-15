import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.tsx'
import { Provider } from "@/components/ui/provider" // Esta é a sua "tradução" do ChakraProvider da v2 do Chakra UI

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
