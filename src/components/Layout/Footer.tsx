import { useGlobal } from '../../context/GlobalContext'

interface FooterProps {}

const Footer = (props: FooterProps) => {
  const { title } = useGlobal()

  return (
    <footer className='bg-[#0a0a0a] text-white/60 py-8 mt-20'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <p>&copy; 2024 Dev Portfolio. All rights reserved.</p>
          <div className='flex space-x-6'>
            <a href='#' className='hover:text-white transition-colors'>Privacy Policy</a>
            <a href='#' className='hover:text-white transition-colors'>Terms of Service</a>
            <a href='#' className='hover:text-white transition-colors'>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer