import { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'
import { useThemeStore } from '../../store/useThemeStore'
import { AccessibilityModal } from '../Modals/AccessibilityModal'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  const [isAccessibilityModalOpen, setIsAccessibilityModalOpen] = useState(false)
  const { reducedMotion, fontSize, highContrast } = useThemeStore()

  // Apply font size classes to the root element
  const fontSizeClasses = {
    normal: 'text-base',
    large: 'text-lg',
    'x-large': 'text-xl',
  }

  return (
    <div className={`min-h-screen ${fontSizeClasses[fontSize]}`}>
      <div className={`min-h-screen bg-[#0a0a0a] text-white ${highContrast ? 'contrast-high' : ''}`}>
        <Header onAccessibilityClick={() => setIsAccessibilityModalOpen(true)} />

        <main className='pt-20 min-h-screen'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.5 }}
          >
            {children}
          </motion.div>
        </main>

        <Footer />

        <AccessibilityModal
          isOpen={isAccessibilityModalOpen}
          onClose={() => setIsAccessibilityModalOpen(false)}
        />
      </div>
    </div>
  )
}