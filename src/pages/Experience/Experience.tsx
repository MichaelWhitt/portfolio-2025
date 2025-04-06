import { motion } from 'framer-motion'
import { Code, ArrowLeft } from '../../components/Icons/Icons'
import { useThemeStore } from '../../store/useThemeStore'
import { Link } from 'wouter'
import Button from '../../components/Buttons/Button'

const Experience = () => {
  
const { reducedMotion } = useThemeStore()

  const workExperience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: '2021 - Present',
      description: 'Led frontend development for accessibility-focused web applications. Implemented WCAG guidelines and optimized performance.',
      skills: ['React', 'TypeScript', 'A11y'],
      icon: Code,
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions Co.',
      period: '2019 - 2021',
      description: 'Developed responsive web applications and collaborated with UX team on design implementation.',
      skills: ['React', 'JavaScript', 'CSS'],
      icon: Code,
    }
  ]

  const projects = [
    {
      title: 'E-commerce Accessibility Platform',
      description: 'Built a fully accessible e-commerce platform with screen reader support and keyboard navigation.',
      link: 'https://example.com',
      skills: ['React', 'TypeScript', 'ARIA', 'Redux'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Healthcare Dashboard',
      description: 'Developed a real-time analytics dashboard for healthcare providers with data visualization.',
      link: 'https://example.com',
      skills: ['React', 'D3.js', 'WebSocket', 'Material-UI'],
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'AI-Powered Learning Platform',
      description: 'Created an adaptive learning platform with AI-driven content recommendations.',
      link: 'https://example.com',
      skills: ['React', 'Python', 'TensorFlow.js', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <div className='container mx-auto px-4 py-16'>
      <div className='max-w-5xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.5 }}
        >
          <Link to='/'>
            <Button 
              className='bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors'
              icon={() => <ArrowLeft className='w-6 h-6 inline mr-2'/>}
              iconLocation='left'
            >
                Home
            </Button>
          </Link>

          <h1 className='text-5xl font-bold mb-4'>
            Professional <span className='text-purple-500'>Journey</span>
          </h1>
          
          <p className='text-gray-400 text-lg mb-12'>
            A timeline of my work experience and notable projects.
          </p>

          {/* Work Experience Timeline */}
          <div className='relative mb-20'>
            <div className='absolute left-8 top-0 bottom-0 w-px bg-purple-500/20'></div>
            
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: reducedMotion ? 0 : index * 0.2 }}
                className='relative pl-20 pb-12'
              >
                <div className='absolute left-0 w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center'>
                  <job.icon className='w-8 h-8 text-purple-500' />
                </div>
                <div className='bg-white/5 p-6 rounded-xl'>
                  <h3 className='text-xl font-semibold text-purple-500'>{job.title}</h3>
                  <p className='text-gray-400'>{job.company}</p>
                  <p className='text-sm text-gray-500 mb-4'>{job.period}</p>
                  <p className='text-gray-300 mb-4'>{job.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {job.skills.map((skill, i) => (
                      <span key={i} className='bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Projects Grid */}
          <h2 className='text-3xl font-bold mb-8'>Notable <span className='text-purple-500'>Projects</span></h2>
          <div className='grid md:grid-cols-2 gap-8'>
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group block'
                whileHover={{ scale: reducedMotion ? 1 : 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: reducedMotion ? 0 : index * 0.1 }}
              >
                <div className='relative h-48 mb-4 rounded-xl overflow-hidden'>
                  <div className='absolute inset-0 bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors'></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='bg-white/5 p-6 rounded-xl'>
                  <h3 className='text-xl font-semibold mb-2 group-hover:text-purple-500 transition-colors'>
                    {project.title}
                  </h3>
                  <p className='text-gray-400 mb-4'>{project.description}</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.skills.map((skill, i) => (
                      <span key={i} className='bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm'>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Experience