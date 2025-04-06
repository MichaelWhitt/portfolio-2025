import { motion } from 'framer-motion'


interface ExperienceItemProps {
  experience: Experience
  index: number
}

const ExperienceItem = ({ experience, index }: ExperienceItemProps) => {
  const isEven = index % 2 === 0
  
  return (
    <motion.div 
      className="relative mb-12 md:ml-0"
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row items-start">
        {/* Timeline dot */}
        <div className="absolute left-[-8px] md:left-[50%] top-0 w-4 h-4 bg-primary rounded-full transform md:translate-x-[-50%] border-2 border-dark-surface"></div>
        
        {isEven ? (
          <>
            {/* Content for left side of timeline on desktop, full width on mobile */}
            <div className="ml-6 md:ml-0 md:w-1/2 md:pr-8 md:text-right">
              <div className="md:hidden bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block mb-2">
                {experience.period}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
              <p className="text-gray-300 mb-1">{experience.company}</p>
              <div className="hidden md:block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block">
                {experience.period}
              </div>
            </div>
            
            {/* Content for right side on desktop */}
            <div className="md:w-1/2 md:pl-8 ml-6 mt-4 md:mt-0">
              <div className="bg-dark-card p-4 rounded-lg">
                <p className="text-gray-300 mb-3">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-dark px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Empty space for left side on mobile, content for left side on desktop */}
            <div className="md:w-1/2 md:pr-8 hidden md:block">
              <div className="bg-dark-card p-4 rounded-lg md:mr-0 ml-auto">
                <p className="text-gray-300 mb-3">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-dark px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Content for right side of timeline on desktop, full width on mobile */}
            <div className="ml-6 md:ml-0 md:w-1/2 md:pl-8">
              <div className="md:hidden bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block mb-2">
                {experience.period}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{experience.title}</h3>
              <p className="text-gray-300 mb-1">{experience.company}</p>
              <div className="hidden md:block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full inline-block">
                {experience.period}
              </div>
              
              {/* Mobile only content */}
              <div className="bg-dark-card p-4 rounded-lg mt-4 md:hidden">
                <p className="text-gray-300 mb-3">
                  {experience.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-dark px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  )
}

export default ExperienceItem
