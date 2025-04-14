import { Link, useLocation } from 'wouter'
import { Code2, Settings, Menu, Home, Briefcase, Mail } from 'lucide-react'
import { X } from '../Icons/Icons'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Button from '../Buttons/Button'

interface HeaderProps {
  onAccessibilityClick: () => void
}

const Header = ({ onAccessibilityClick }: HeaderProps) => {
  const [location, ] = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className='fixed top-0 left-0 right-0 w-full bg-linear-to-r from-purple-500/50 to-slate-950/10 backdrop-blur-md z-50 border-b border-white/10'>
        <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-2 text-xl font-bold text-white hover:text-white/50 hover:underline transition-colors'>
            <Code2 className='w-6 h-6' />
            <span>Michael D Whitt</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link href='/' className={`font-bold transition-colors ${location === '/' ? 'text-purple-500 underline' : 'hover:text-purple-500 hover:underline'}`}>
              Home
            </Link>
            <Link href='/experience' className={`font-bold transition-colors ${location === '/experience' ? 'text-purple-500 underline' : 'hover:text-purple-500 hover:underline'}`}>
              Experience
            </Link>
            <Link href='/contact' className={`font-bold transition-colors ${location === '/contact' ? 'text-purple-500 underline' : 'hover:text-purple-500 hover:underline'}`}>
              Contact
            </Link>
            <button
              onClick={onAccessibilityClick}
              className='p-2 hover:bg-white/10 rounded-full transition-colors'
              aria-label='Open accessibility settings'
            >
              <Settings className='w-5 h-5' />
            </button>
          </div>
        </nav>
      </header>

      {/* Floating Action Button */}
      <button
        onClick={toggleMobileMenu}
        className='md:hidden fixed bottom-10 right-5 p-4 bg-purple-500 hover:bg-purple-600 rounded-full shadow-lg transition-colors z-40'
        aria-label='Open menu'
      >
        <Menu className='w-6 h-6' />
      </button>

      {/* Mobile Navigation Modal */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden'
              onClick={closeMobileMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className='fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/10 z-50 md:hidden'
            >
              <div className='container mx-auto px-4 pb-6 pt-1'>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className='bg-red-400/20 border border-2 border-red-800 mb-2 md:hidden flex justify-center rounded-md '
                  onClick={closeMobileMenu}
                >
                  <Button
                    className='p-2 rounded-full transition-colors flex items-center font-bold text-3xl'
                    aria-label='Close menu'
                  >
                    Close Menu
                    {/* <X className='w-10 h-10' stroke='#ff00Ff' /> */}
                  </Button>
                </motion.div>
                <div className='grid grid-cols-2 gap-4'>
                  <Link 
                    href='/' 
                    onClick={closeMobileMenu}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${
                      location === '/' 
                        ? 'bg-purple-500/20 text-purple-500' 
                        : 'hover:bg-white/5 hover:text-purple-500'
                    }`}
                  >
                    <Home className='w-8 h-8 mb-2' />
                    <span className='font-bold'>Home</span>
                  </Link>
                  <Link 
                    href='/experience' 
                    onClick={closeMobileMenu}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${
                      location === '/experience' 
                        ? 'bg-purple-500/20 text-purple-500' 
                        : 'hover:bg-white/5 hover:text-purple-500'
                    }`}
                  >
                    <Briefcase className='w-8 h-8 mb-2' />
                    <span className='font-bold text-white'>Experience</span>
                  </Link>
                  <Link 
                    href='/contact' 
                    onClick={closeMobileMenu}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${
                      location === '/contact' 
                        ? 'bg-purple-500/20 text-purple-500' 
                        : 'hover:bg-white/5 hover:text-purple-500'
                    }`}
                  >
                    <Mail className='w-8 h-8 mb-2' />
                    <span className='font-bold text-white'>Contact</span>
                  </Link>
                  <Button
                    onClick={() => {
                      closeMobileMenu()
                      onAccessibilityClick()
                    }}
                    className='flex flex-col items-center justify-center p-4 rounded-lg transition-colors hover:bg-white/5 hover:text-purple-500'
                  >
                    <Settings className='w-8 h-8 mb-2' />
                    <span className='font-bold text-white'>Accessibility</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header 