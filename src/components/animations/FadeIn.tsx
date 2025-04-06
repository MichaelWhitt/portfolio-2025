import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  viewportOnce?: boolean
}

const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  className = '', 
  viewportOnce = true 
}: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: viewportOnce }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
