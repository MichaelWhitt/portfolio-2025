import { Globe, LinkedIn, Github, Building, CircleCheck, Email, Keyboard } from '../../components/Icons/Icons'
import iaaplogo from '../../../public/iaaplogo.webp'
import dhslogo from '../../../public/dhslogo.png'

function BusinessCard() {
  const services = [
    {
      title: 'Accessibility Audits',
      description:
        'Comprehensive WCAG 2.2 compliance audits for web applications and digital products',
      icon: CircleCheck,
      details: ['Section 508 Compliance', 'EN 301 549', 'ADA Conformance'],
    },
    {
      title: 'Technical Consultation',
      description:
        'Expert guidance on implementing accessibility standards in modern web applications',
      icon: Building,
      details: ['Architecture Review', 'Implementation Strategy', 'Best Practices'],
    },
    {
      title: 'Remediation Services',
      description:
        'Hands-on fixing of accessibility issues and implementation of inclusive design patterns',
      icon: Keyboard,
      details: ['Code Remediation', 'Pattern Libraries', 'Documentation'],
    },
  ]

  const regions = [
    {
      name: 'European Union',
      standards: ['EN 301 549', 'EAA Compliance', 'Public Sector Requirements'],
    },
    {
      name: 'United States',
      standards: ['ADA Standards', 'Section 508', 'State-specific Requirements'],
    },
  ]

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        {/* Header Section */}
        <div className='border-b border-gray-800 pb-12 mb-12'>
          <div className='max-w-3xl'>
            <h1 className='text-4xl font-bold text-white mb-4'>Michael D Whitt</h1>
            <p className='text-xl text-gray-300 mb-4'>
              Accessibility Consultant & Senior Software Engineer
            </p>

            {/* Certifications */}
            <p className='text-md text-gray-400 mb-6 flex items-center gap-4 flex-wrap'>
              <div className=''>Certified by</div>
              <div className='flex gap-5'>
                <span className='flex items-center gap-1'>
                  <img src={dhslogo} alt='DHS Logo' className='h-5 w-auto' />
                  <span className='hidden md:inline'>Department of Homeland Security</span>
                  <span className='md:hidden'>DHS</span>
                </span>
                <span className='flex items-center gap-1'>
                  <img src={iaaplogo} alt='IAAP Logo' className='h-5 w-auto' />
                  <span className='hidden md:inline'>International Association of Accessibility Professionals</span>
                  <span className='md:hidden'>IAAP</span>
                </span>
              </div>
            </p>

            <div className='flex flex-wrap gap-4 text-sm'>
              <span className='inline-flex items-center px-3 py-1 bg-purple-900/30 border border-purple-700/20 rounded-md'>
                WCAG 2.2 Certified
              </span>
              <span className='inline-flex items-center px-3 py-1 bg-blue-900/30 border border-blue-700/20 rounded-md'>
                Section 508 Professional
              </span>
              <span className='inline-flex items-center px-3 py-1 bg-indigo-900/30 border border-indigo-700/20 rounded-md'>
                EN 301 549 Certified
              </span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className='mb-16'>
          <h2 className='text-2xl font-semibold mb-8'>Professional Services</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {services.map((service) => (
              <div
                key={service.title}
                className='bg-gray-800/50 rounded-lg p-6 border border-gray-700'
              >
                <service.icon className='h-8 w-8 text-purple-400 mb-4' aria-hidden='true' />
                <h3 className='text-xl font-semibold mb-3'>{service.title}</h3>
                <p className='text-gray-300 mb-4'>{service.description}</p>
                <ul className='space-y-2'>
                  {service.details.map((detail) => (
                    <li key={detail} className='text-sm text-gray-400 flex items-center'>
                      <span className='w-1.5 h-1.5 bg-purple-400 rounded-full mr-2' />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Expertise */}
        <div className='mb-16'>
          <h2 className='text-2xl font-semibold mb-8'>Regional Expertise</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {regions.map((region) => (
              <div
                key={region.name}
                className='bg-gray-800/50 rounded-lg p-6 border border-gray-700'
              >
                <div className='flex items-center mb-4'>
                  <Globe />
                  <h3 className='text-xl font-semibold'>{region.name}</h3>
                </div>
                <ul className='space-y-2'>
                  {region.standards.map((standard) => (
                    <li key={standard} className='text-gray-300 flex items-center'>
                      <span className='w-1.5 h-1.5 bg-purple-400 rounded-full mr-2' />
                      {standard}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className='border-t border-gray-800 pt-12'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div>
              <h2 className='text-2xl font-semibold mb-2'>Let's Discuss Your Project</h2>
              <p className='text-gray-300'>Available for consultations and accessibility audits</p>
            </div>
            <div className='flex space-x-4 mt-6 md:mt-0'>
              <a
                href='mailto:contact@example.com'
                className='p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'
                aria-label='Email'
              >
                <Email />
              </a>
              <a
                href='https://github.com'
                className='p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'
                aria-label='GitHub'
              >
                <Github />
              </a>
              <a
                href='https://linkedin.com'
                className='p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors'
                aria-label='LinkedIn'
              >
                <LinkedIn />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default BusinessCard
