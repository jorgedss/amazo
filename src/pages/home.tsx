import { Button } from '@/components/ui/button'

import { Questionnarie } from '@/components/questionnarie'
import { Plus } from 'lucide-react'

export function Home() {
  return (
    <div className="flex flex-col flex-grow justify-between space-y-20 p-8 w-full">
      <div className="flex items-center w-full">
        <span className="flex justify-between items-center w-full font-semibold text-5xl text-slate-800 tracking-tight">
          Meu painel
        </span>

        <Button variant="newContent" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Cadastrar conteúdo
        </Button>
      </div>

      <Questionnarie />
    </div>
  )
}
