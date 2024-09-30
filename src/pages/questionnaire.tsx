import { Button } from '@/components/ui/button'
import { useContext, useState } from 'react'
import { QuestionnarieContext } from '@/context/questionnarie-context'
import { Dialog } from '@/components/ui/dialog'
import { QuestionDialogContent } from './questionnarie/question-dialog-content'

export function Questionnaire() {
  const { questionnarieData } = useContext(QuestionnarieContext)
  const [currentId, setCurrentId] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const maxIndex = questionnarieData.length - 1
  const content = questionnarieData[currentId]

  function handleSetCurrentId(id: number) {
    setCurrentId(id)
    setIsDialogOpen(true)
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
        {questionnarieData.map((question, i) => {
          return (
            <Button
              key={question.id}
              onClick={() => handleSetCurrentId(question.id)}
              className="justify-start items-start bg-emerald-700 hover:bg-emerald-500 rounded-md h-40 font-medium text-4xl text-muted tracking-wide"
            >
              Questão {i + 1}
            </Button>
          )
        })}

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <QuestionDialogContent
            currentId={currentId}
            maxIndex={maxIndex}
            content={content}
            handleSetCurrentId={handleSetCurrentId}
          />
        </Dialog>
      </div>
    </div>
  )
}
