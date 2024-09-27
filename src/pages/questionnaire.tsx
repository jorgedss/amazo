import { Button } from '@/components/ui/button'
import { QuestionButton } from './questionnarie/question-button'
import { useContext } from 'react'
import { QuestionnarieContext } from '@/context/questionnarie-context'

export function Questionnaire() {
  const { questionnarieData } = useContext(QuestionnarieContext)
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
        {questionnarieData.map(question => {
          return (
            <QuestionButton
              key={question.id}
              id={question.id}
              question={question.question}
              options={question.options}
              answer={question.answer}
            />
          )
        })}
      </div>
    </div>
  )
}
