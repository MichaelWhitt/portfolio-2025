import { Counter } from '../testItems/Counter'

interface HomeProps {

}

const Home = (props: HomeProps) => {
  return (
    <div className='container mx-auto p-8 bg-secondary'>
      <h1 className="text-3xl font-bold mb-8">Welcome to the Home Page</h1>
      <Counter />
    </div>
  )
}

export default Home