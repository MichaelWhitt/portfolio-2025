import { createContext, useContext, ReactNode } from 'react'
import { GlobalContextType } from '../types'

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <GlobalContext.Provider value={{ title }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider')
  }
  return context
} 