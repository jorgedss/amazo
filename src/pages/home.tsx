import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { QuestionnarieContext } from '@/context/questionnarie-context'
import { ChevronUp } from 'lucide-react'
import { useContext } from 'react'

export function Home() {
  const { questionnarieData } = useContext(QuestionnarieContext)

  console.log(questionnarieData)

  return (
    <div className="flex flex-grow justify-center items-center gap-4 p-4">
      <Input
        placeholder="Digite o assunto"
        className="bg-emerald-600/80 shadow-md px-6 ring-1 ring-transparent focus:ring-emerald-600 max-w-md h-14 text-white focus:outline-none rounded-full text-lg placeholder:text-emerald-50/70"
      />
      <Button
        variant="generate"
        className="bg-emerald-600/80 shadow-md p-0 rounded-full w-10 h-10"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </div>
  )
}
