import { motion, AnimatePresence } from 'framer-motion'
import { X, TypeLine, MousePointerClick, Contrast } from '../Icons/Icons'
import { useThemeStore } from '../../store/useThemeStore'
import { useEffect, useRef } from 'react'
import Button from '../Buttons/Button'

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

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close modal on Esc key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      closeButtonRef.current?.focus(); // Focus on the close button when modal opens
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

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
              <Button
                ref={closeButtonRef}
                onClick={onClose}
                className='bg-white/5 hover:bg-white/10 p-2 rounded-full transition-colors '
                aria-label='Close accessibility settings'
              >
                <X className='w-8 h-8' />
              </Button>
            </div>

            <div className='space-y-6'>
              <div>
                <h3 className='text-lg font-semibold mb-3 flex items-center'>
                  <TypeLine className='w-8 h-8 mr-3' />
                  Font Size
                </h3>
                <div className='flex gap-3'>
                  {(['normal', 'large', 'x-large'] as const).map((size) => (
                    <Button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        fontSize === size
                          ? 'bg-purple-500/60 text-white'
                          : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className='text-lg font-semibold mb-3 flex items-center'>
                  <MousePointerClick className='w-8 h-8 mr-3' />
                  Motion
                </h3>
                <Button
                  onClick={toggleReducedMotion}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    reducedMotion
                      ? 'bg-purple-500/60 text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {reducedMotion ? 'Reduced Motion On' : 'Reduced Motion Off'}
                </Button>
              </div>

              {/* <div>
                <h3 className='text-lg font-semibold mb-3 flex items-center'>
                  <Contrast className='w-8 h-8 mr-3'  />
                  Contrast
                </h3>
                <Button
                  onClick={toggleHighContrast}
                  className={`w-full px-4 py-2 rounded-lg transition-colors ${
                    highContrast
                      ? 'bg-purple-500/60 text-white'
                      : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {highContrast ? 'High Contrast On' : 'High Contrast Off'}
                </Button>
              </div> */}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}