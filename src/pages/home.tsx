import { Button } from '@/components/ui/button'
import { useContext, useState } from 'react'
import { QuestionnarieContext } from '@/context/questionnarie-context'
import { Dialog } from '@/components/ui/dialog'
import { QuestionDialogContent } from './components/question-dialog-content'
import { Plus } from 'lucide-react'
import { Card } from './components/card'

export function Home() {
  const { questionnarieData } = useContext(QuestionnarieContext)
  const [currentId, setCurrentId] = useState(0)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const maxIndex = questionnarieData.length - 1
  const content = questionnarieData.find(question => question.id === currentId)

  function handleSetCurrentId(id: number) {
    setCurrentId(id)
    setIsDialogOpen(true)
  }

  return (
    <div className="flex flex-col flex-grow justify-between space-y-20 p-8 w-full">
      <div className="flex items-center w-full borde">
        <span className="flex justify-between items-center w-full font-semibold text-5xl text-slate-800 tracking-tight">
          Meu painel
        </span>

        <Button variant="newContent" className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Cadastrar conteúdo
        </Button>
      </div>

      <div className="flex-grow grid grid-cols-6">
        <div className="col-span-2">Implementação futura</div>
        <div className="justify-center items-center gap-8 border-2 border-orange-900-600 border-slate-400/40 grid grid-cols-3 col-span-4 bg-slate-100 shadow-lg p-8 rounded-lg">
          {questionnarieData.map((question, i) => {
            const colorClasses = [
              'bg-pink-200 border-pink-400',
              'bg-purple-200 border-purple-400',
              'bg-blue-200 border-blue-400',
              'bg-green-200 border-green-400',
              'bg-lime-200 border-lime-400',
              'bg-yellow-200 border-yellow-400',
              'bg-orange-200 border-orange-400',
              'bg-red-200 border-red-400',
              'bg-cyan-200 border-cyan-400',
            ]
            return (
              <Card
                key={question.id}
                colorClasses={colorClasses[i]}
                themeContent={`Tema ${question.id + 1}`}
              >
                <Button
                  variant="ghost"
                  onClick={() => handleSetCurrentId(question.id)}
                  className="text-muted-foreground"
                >
                  Responder
                </Button>
              </Card>
            )
          })}
        </div>

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
