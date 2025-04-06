  import { Link } from 'wouter'
  import { useState, useEffect, useRef } from 'react'

  interface HeaderProps {

  }

  const Header = (props: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsMenuOpen(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

    const handleKeyPress = (event: React.KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        toggleMenu()
      }
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    return (
      <header className='bg-bg-900 text-white p-4'>
        <nav className='container mx-auto flex justify-between items-center' ref={menuRef}>
          <div className='text-xl font-bold'>My Website</div>
          
          {/* Mobile menu button */}
          <button
            className='lg:hidden p-2'
            onClick={toggleMenu}
            onKeyDown={handleKeyPress}
            aria-expanded={isMenuOpen}
            aria-label='Toggle navigation menu'
            aria-controls='mobile-menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className='hidden lg:flex space-x-4'>
            <Link href='/' className='hover:text-gray-300'>Home</Link>
            <Link href='/about' className='hover:text-gray-300'>About</Link>
            <Link href='/contact' className='hover:text-gray-300'>Contact</Link>
          </div>

          {/* Mobile navigation */}
          <div
            id='mobile-menu'
            className={`absolute top-16 left-0 right-0 bg-bg-800 shadow-lg lg:hidden transition-transform duration-300 transform ${isMenuOpen ? 'scale-y-100' : 'scale-y-0'}`}
            role='navigation'
            aria-label='Mobile navigation'
          >
            <div className='flex flex-col items-center'>
              <Link 
                href='/' 
                className='w-full p-4 text-lg text-center hover:bg-accent-dark focus:bg-accent-dark outline-none focus:ring-2 focus:ring-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
                role='menuitem'
              >
                Home
              </Link>
              <Link 
                href='/about' 
                className='w-full p-4 text-lg text-center hover:bg-accent-dark focus:bg-accent-dark outline-none focus:ring-2 focus:ring-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
                role='menuitem'
              >
                About
              </Link>
              <Link 
                href='/contact' 
                className='w-full p-4 text-lg text-center hover:bg-accent-dark focus:bg-accent-dark outline-none focus:ring-2 focus:ring-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
                role='menuitem'
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </header>
    )
  }

  export default Header 