import { Button } from '@/components/ui/button'
import { useContext, useState } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { QuestionDialogContent } from '../components/question-dialog-content'
import { Loader2, Plus } from 'lucide-react'
import { Card } from '../components/card'
import { CardContext } from '@/context/questionnarie-context'

export function Home() {
  const { cardSummary, questionnarieData } = useContext(CardContext)
  const [currentId, setCurrentId] = useState('')
  //const [currentCardId, setCurrentCardId] = useState('WIWMV2q')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // fazer a requisição para obter questionnarieData: com base no currentCardId

  if (!questionnarieData || !cardSummary) {
    return <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
  }

  // define o id da questão atual a ser exibida pelo dialogContent
  function handleSetCurrentId(id: string, cardId: string) {
    //fazer a chamada a api para buscar os dados do card de acordo com o id
    console.log(cardId)
    setCurrentId(id)
    setIsDialogOpen(true)
  }

  const CurrentQuestion = questionnarieData.questions.find(
    question => question.questionId === currentId
  )

  const maxIndex = questionnarieData.questions.length - 1

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

      <div className="flex-grow grid grid-cols-6">
        <div className="col-span-2">Implementação futura</div>
        <div className="justify-center items-center gap-8 border-2 border-slate-900/10 grid grid-cols-3 col-span-4 bg-slate-100 shadow-lg p-8 border-opacity-30 rounded-lg">
          {cardSummary.map((card, i) => {
            return (
              <Card
                key={card.id}
                color={card.color}
                themeContent={`Tema ${i + 1}`}
              >
                <Button
                  value={card.id}
                  variant="ghost"
                  // 23 id da primeira questão do card, valor provisório logica será melhorada
                  onClick={event =>
                    handleSetCurrentId('23', event.currentTarget.value)
                  }
                  className="rounded-t-none hover:rounded-2xl hover:rounded-t-none text-zinc-800/50 hover:text-zinc-800"
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
            content={CurrentQuestion}
            handleSetCurrentId={handleSetCurrentId}
          />
        </Dialog>
      </div>
    </div>
  )
}
