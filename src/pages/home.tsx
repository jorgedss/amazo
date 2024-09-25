import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Home() {
  return (
    <div className="relative flex flex-grow justify-center items-center gap-4 p-4 w-full">
      <Input className="border-emerald-800 focus:border-emerald-400 bg-emerald-900/50 max-w-80 text-white focus:outline-none focus:ring-1" />
      <Button variant="generate">Gerar</Button>
    </div>
  )
}
