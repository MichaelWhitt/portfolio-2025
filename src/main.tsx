import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './index.css'
import App from './App.tsx'
import { GlobalProvider } from './context/GlobalContext'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider title="Your Website Name">
        <App />
      </GlobalProvider>
    </QueryClientProvider>
  </StrictMode>,
)
