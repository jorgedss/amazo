import { Header } from '@/components/header'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <div className="flex flex-col m-auto max-w-screen-4xl min-h-screen antialiased">
      <Header />

      <div className="flex flex-col flex-1 gap-4 bg-zinc-150 p-2">
        <Outlet />
      </div>
    </div>
  )
}
