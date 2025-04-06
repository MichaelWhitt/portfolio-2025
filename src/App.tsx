import { Route, Switch } from 'wouter'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className='h-screen w-screen flex flex-col overflow-hidden'>
      <Header />
      <main className='flex-grow overflow-auto'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App