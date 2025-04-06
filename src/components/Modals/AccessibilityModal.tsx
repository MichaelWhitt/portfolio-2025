import { motion, AnimatePresence } from 'framer-motion'
import { X, Type, MousePointerClick, Contrast } from 'lucide-react'
import { useThemeStore } from '../../store/useThemeStore'

interface AccessibilityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AccessibilityModal({ isOpen, onClose }: AccessibilityModalProps) {
  const {
    reducedMotion,
    fontSize,
    highContrast,
    toggleReducedMotion,
    setFontSize,
    toggleHighContrast,
  } = useThemeStore()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50'
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-xl p-6 z-50'
            role='dialog'
            aria-labelledby='accessibility-title'
          >
            <div className='flex items-center justify-between mb-6'>
              <h2 id='accessibility-title' className='text-2xl font-bold'>
                Accessibility Settings
              </h2>
              <button
                onClick={onClose}
                className='p-2 hover:bg-white/10 rounded-full transition-colors'
                aria-label='Close accessibility settings'
              >
                <X className='w-5 h-5' />
              </button>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold mb-3 flex items-center'>
                  <Type className='w-5 h-5 mr-2' />
                  Font Size
                </h3>
                <div className='flex gap-3'>
                  {(['normal', 'large', 'x-large'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        fontSize === size
                          ? 'bg-purple-500 text-white'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-3 flex items-center'>
                  <MousePointerClick className='w-5 h-5 mr-2' />
                  Motion
                </h3>
                <button
                  onClick={toggleReducedMotion}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    reducedMotion
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {reducedMotion ? 'Reduced Motion On' : 'Reduced Motion Off'}
                </button>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-3 flex items-center'>
                  <Contrast className='w-5 h-5 mr-2' />
                  Contrast
                </h3>
                <button
                  onClick={toggleHighContrast}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    highContrast
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {highContrast ? 'High Contrast On' : 'High Contrast Off'}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}