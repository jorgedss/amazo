import { Header } from './components/header'
import { Home } from './pages/home'

export function App() {
  return (
    <div className="flex flex-col bg-zinc-950 h-screen antialiased">
      <Header />
      <Home />
    </div>
  )
}
