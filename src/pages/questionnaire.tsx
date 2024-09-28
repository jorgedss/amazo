import { Button } from '@/components/ui/button'
import { QuestionButton } from './questionnarie/question-button'
import { useContext } from 'react'
import { QuestionnarieContext } from '@/context/questionnarie-context'

export function Questionnaire() {
  const { questionnarieData } = useContext(QuestionnarieContext)

  //const [modalIsOpen, setModalOpen] = useState(false)

  return (
    <div className="flex flex-col flex-grow justify-between p-8">
      <div className="flex items-center">
        <span
          style={{ contentVisibility: 'auto' }}
          className="flex flex-1 items-center font-semibold text-5xl text-emerald-600"
        >
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
