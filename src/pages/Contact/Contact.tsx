import { motion } from 'framer-motion'
import { LinkedIn, Email } from '../../components/icons/Icons'
import { useThemeStore } from '../../store/useThemeStore'

const Contact = () =>  {
  const { reducedMotion } = useThemeStore()

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-4xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
        >
          <div className='flex items-center mb-8'>
            <button 
              onClick={() => window.history.back()}
              className='bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors'
            >
              Back to Home
            </button>
          </div>

          <h1 className='text-5xl font-bold mb-4'>
            Let's <span className='text-purple-500'>Connect</span>
          </h1>
          
          <p className='text-gray-400 text-lg mb-12'>
            I'm always open to discussing new projects, opportunities, and collaborations.
          </p>

          <div className='grid gap-8 md:grid-cols-2'>
            <motion.a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-white/5 p-8 rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-colors'
              whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
            >
              <div className='bg-purple-500/20 p-4 rounded-full mb-4'>
                <LinkedIn />
              </div>
              <h2 className='text-xl font-semibold mb-2'>LinkedIn</h2>
              <p className='text-gray-400'>Let's connect professionally and grow our network</p>
            </motion.a>

            <motion.a
              href='mailto:contact@example.com'
              className='bg-white/5 p-8 rounded-xl flex flex-col items-center text-center hover:bg-white/10 transition-colors'
              whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
            >
              <div className='bg-purple-500/20 p-4 rounded-full mb-4'>
                <Email />
              </div>
              <h2 className='text-xl font-semibold mb-2'>Email</h2>
              <p className='text-gray-400'>Send me a message to discuss your project</p>
            </motion.a>
          </div>

          <div className='mt-16 bg-white/5 p-8 rounded-xl'>
            <h2 className='text-2xl font-semibold mb-4'>Office Hours</h2>
            <p className='text-gray-400 mb-4'>
              Available for meetings and consultations:
            </p>
            <ul className='space-y-2 text-gray-300'>
              <li>Monday - Friday: 9:00 AM - 5:00 PM EST</li>
              <li>Weekend meetings available by appointment</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact