import { motion } from 'framer-motion'
import { Code, Accessibility, Sparkles, ArrowLeft } from '../../components/Icons/Icons'
import { useThemeStore } from '../../store/useThemeStore'
import { Link } from 'wouter'
import Button from '../../components/Buttons/Button'

const Landing = () => {
  const { reducedMotion } = useThemeStore()

  return (
    <div className='min-h-[calc(100vh-4rem)] flex items-center'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.8 }}
          className='max-w-4xl mx-auto text-center'
        >
          <h1 className='text-6xl font-bold mb-6'>
            <span className='text-white'>Crafting</span>{' '}
            <span className='text-purple-500'>Accessible</span>{' '}
            <span className='text-white'>Digital Experiences</span>
          </h1>
          
          <p className='text-xl text-gray-400 mb-12'>
            Software Engineer & Accessibility Consultant specializing in creating inclusive digital solutions 
            that work for everyone.
          </p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16'>
            <motion.div
              whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
              className='bg-white/5 p-6 rounded-xl backdrop-blur-sm'
            >
              <div className='bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4'>
                <Code className='' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Software Engineering</h3>
              <p className='text-gray-400'>Building robust, scalable applications with modern technologies</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
              className='bg-white/5 p-6 rounded-xl backdrop-blur-sm'
            >
              <div className='bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4'>
                <Accessibility className='' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>Accessibility Consulting</h3>
              <p className='text-gray-400'>Ensuring digital products are accessible to all users</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: reducedMotion ? 1 : 1.05 }}
              className='bg-white/5 p-6 rounded-xl backdrop-blur-sm'
            >
              <div className='bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4'>
                <Sparkles className='' />
              </div>
              <h3 className='text-xl font-semibold mb-2'>User Experience</h3>
              <p className='text-gray-400'>Creating intuitive and delightful user experiences</p>
            </motion.div>
          </div>
        </motion.div>
        <div className='flex justify-center mt-5'>
          <Link to='/experience'>
              <Button 
                className='bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors'
                icon={() => <ArrowLeft className='w-6 h-6 inline ml-2 rotate-180'/>}
                iconLocation='right'
              >
                  Experience
              </Button>
            </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Landing