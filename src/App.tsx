import { Route, Switch } from 'wouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Layout } from './components/Layout/Layout'
import Landing from './pages/Landing/Landing'
import Experience from './pages/Experience/Experience'
import Contact from './pages/Contact/Contact'
import BusinessCard from './pages/BusinessCard/BusinessCard'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Switch>
          <Route path='/' component={Landing} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={Contact} />
          <Route path='/digital-business-card' component={BusinessCard} />
          <Route path='*' component={Landing} />
        </Switch>
      </Layout>
    </QueryClientProvider>
  )
}

export default App