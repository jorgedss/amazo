import { Button } from '@/components/ui/button'
import { useContext, useState } from 'react'
import { QuestionnarieContext } from '@/context/questionnarie-context'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { QuestionDialogContent } from './questionnarie/question-dialog-content'

export function Questionnaire() {
  const { questionnarieData } = useContext(QuestionnarieContext)
  const [dialogContent, setDialogContent] = useState(0)

  function handleSetQuestionContent(id: number) {
    setDialogContent(id)
  }

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
        <Dialog>
          {questionnarieData.map((question, i) => {
            return (
              <DialogTrigger asChild key={question.id}>
                <Button
                  onClick={() => handleSetQuestionContent(question.id)}
                  className="justify-start items-start bg-emerald-700 hover:bg-emerald-500 rounded-md h-40 font-medium text-4xl text-muted tracking-wide"
                >
                  Questão {i + 1}
                </Button>
              </DialogTrigger>
            )
          })}

          <QuestionDialogContent id={dialogContent} />
        </Dialog>
      </div>
    </div>
  )
}
