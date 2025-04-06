import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SlideInProps {
  children: ReactNode
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  className?: string
  viewportOnce?: boolean
}

const SlideIn = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  viewportOnce = true
}: SlideInProps) => {
  const directionToVariants = {
    left: {
      hidden: { x: -40, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    right: {
      hidden: { x: 40, opacity: 0 },
      visible: { x: 0, opacity: 1 }
    },
    up: {
      hidden: { y: 40, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    },
    down: {
      hidden: { y: -40, opacity: 0 },
      visible: { y: 0, opacity: 1 }
    }
  }

  const variants = directionToVariants[direction]

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: viewportOnce }}
      variants={variants}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default SlideIn
