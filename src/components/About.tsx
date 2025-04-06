
interface AboutProps {

}

const About = (props: AboutProps) => {
  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-3xl font-bold mb-4'>About Us</h1>
      <p className='text-lg'>Learn more about our company and what we do.</p>
    </div>
  )
}

export default About;