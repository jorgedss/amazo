import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Header />

      <div className="flex flex-col flex-1 gap-4 bg-zinc-950 p-8">
        <Outlet />
      </div>
    </div>
  )
}
