import { Button } from '@/components/ui/button'
import { useContext, useState, useEffect } from 'react'
import { Dialog } from '@/components/ui/dialog'
import { QuestionDialogContent } from '../components/question-dialog-content'
import { Loader2 } from 'lucide-react'
import { Card } from '../components/card'
import { CardContext } from '@/context/questionnarie-context'
import type { CardDataResponse } from '@/context/questionnarie-context'

export function Questionnarie() {
  const { cardSummary, questionnarieData } = useContext(CardContext)

  const [currentCard, setCurrentCard] = useState<CardDataResponse>()
  const [currentQuestionId, setCurrentQuestionId] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  // Carrega o primeiro id de questão quando o currentCard é atualizado
  useEffect(() => {
    if (currentCard && currentCard.questions.length > 0) {
      setIsDialogOpen(true)
    }
  }, [currentCard])

  if (!questionnarieData || !cardSummary) {
    return <Loader2 className="w-8 h-8 text-muted-foreground animate-spin" />
  }

  function handleSetCurrentCard(cardId: string) {
    const selectedCard = questionnarieData.find(
      (card: CardDataResponse) => card.id === cardId
    )
    setCurrentCard(selectedCard)
  }
  function handleSetCurrentQuestionId(id: string) {
    setCurrentQuestionId(id)
  }

  const CurrentQuestion = currentCard?.questions.find(
    question => question.questionId === currentQuestionId
  )
  // Index da questão atual

  const maxIndex = currentCard?.questions.length
    ? currentCard.questions.length - 1
    : 0

  return (
    <div className="flex-grow justify-end-end grid grid-cols-6">
      <div className="col-span-2">Implementação futura</div>
      <div className="justify-center items-center gap-4 border-2 border-violet-900 grid grid-cols-3 col-span-4 bg-violet-400/10 shadow-lg ml-auto p-8 border-opacity-30 rounded-lg max-w-3xl max-h-[400px]">
        {cardSummary.map(card => (
          <Card key={card.id} color={card.color} themeContent={card.theme}>
            <Button
              value={card.id}
              variant="ghost"
              onClick={event => handleSetCurrentCard(event.currentTarget.value)}
              className="rounded-t-none hover:rounded-2xl hover:rounded-t-none text-zinc-800/50 hover:text-zinc-800"
            >
              Responder
            </Button>
          </Card>
        ))}
      </div>

      {/* Exibe o Dialog apenas quando currentCard estiver definido */}
      {currentCard && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <QuestionDialogContent
            maxIndex={maxIndex}
            currentCard={currentCard}
            content={CurrentQuestion ?? currentCard.questions[0]} // Renderiza a primeira questão
            handleSetCurrentId={handleSetCurrentQuestionId} // lógica para trocar de questão
          />
        </Dialog>
      )}
    </div>
  )
}
