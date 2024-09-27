import { Button } from '@/components/ui/button'
import { QuestionButton } from './questionnarie/question-button'

export function Questionnaire() {
  return (
    <div className="flex flex-col flex-grow justify-between p-8 w-full">
      <div className="flex items-center w-full borde">
        <span className="flex justify-between items-center w-full font-semibold text-5xl text-emerald-600 tracking-tight">
          Nome do assunto
        </span>

        <div className="flex items-center gap-2">
          <Button size="sm" variant="seconday">
            Mudar assunto
          </Button>
          <Button size="sm" variant="primary">
            Novas questões
          </Button>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-3 py-4">
        {Array.from({ length: 6 }).map((_, i) => {
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          return <QuestionButton key={i} id={i + 1} />
        })}
      </div>
    </div>
  )
}
