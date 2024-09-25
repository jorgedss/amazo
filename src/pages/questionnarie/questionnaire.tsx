import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { QuestionButton } from './question-button'

export function Questionnaire() {
  return (
    <div className="flex justify-center items-center p-4 pt-0 w-full">
      <div className="w-full max-w-lg">
        <div className="flex justify-center items-center gap-2 bg-emerald-950 mb-8 rounded-b-none rounded-md w-full">
          <span className="flex items-center p-2 font-normal text-base text-white">
            Geometria diferencial
          </span>

          <Button
            variant="ghost"
            className="flex items-center hover:bg-white p-0 h-4"
          >
            <X className="w-4 h-4 text-white hover:text-black" />
          </Button>
        </div>

        <div className="flex flex-col gap-4">
          {Array.from({ length: 6 }).map((_, i) => {
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            return <QuestionButton key={i} id={i + 1} />
          })}
        </div>
      </div>
    </div>
  )
}
