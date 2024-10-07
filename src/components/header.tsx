import { SquareUser } from 'lucide-react'

export function Header() {
  return (
    <div className="justify-center items-center grid grid-cols-3 bg-violet-500 px-8 h-20">
      <div /> {/*Para o grid*/}
      <div className="flex justify-center items-centerfont-bold font-mono text-4xl text-white leading-none tracking-normal">
        amazo
      </div>
      <div className="flex justify-end">
        <SquareUser className="hover:bg-emerald-50 rounded-sm w-8 h-8 text-emerald-50 hover:text-violet-500" />
      </div>
    </div>
  )
}
