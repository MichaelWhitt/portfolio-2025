import { Link, useLocation } from 'wouter'
import { Code2, Settings } from 'lucide-react'

interface HeaderProps {
  onAccessibilityClick: () => void
}

const Header = ({ onAccessibilityClick }: HeaderProps) => {

  const [location, ] = useLocation()

  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-linear-to-r from-purple-500/50 to-slate-950/10 backdrop-blur-md z-50 border-b border-white/10'>

      <nav className='container mx-auto px-4 py-4 flex items-center justify-between'>
        <Link href='/' className='flex items-center space-x-2 text-xl font-bold text-white hover:text-purple-500 transition-colors'>
          <Code2 className='w-6 h-6' />
          <span>Dev Portfolio</span>
        </Link>
        
        <div className='flex items-center space-x-8'>
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
  )
}

export default Header 