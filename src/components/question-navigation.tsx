// QuestionNavigation.tsx
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface QuestionNavigationProps {
  onSubmit: () => void
  onPrevQuestion: () => void
  onNextQuestion: () => void
  isVerified: boolean
  prevButtonDisabled: boolean
  nextButtonDisabled: boolean
}

export function QuestionNavigation({
  onNextQuestion,
  onPrevQuestion,
  onSubmit,
  isVerified,
  prevButtonDisabled,
  nextButtonDisabled,
}: QuestionNavigationProps) {
  return (
    <div className="flex justify-between items-center pl-2">
      <div className="flex items-center gap-2">
        <Button
          onClick={onSubmit}
          size="sm"
          variant="generate"
          disabled={isVerified} // Desabilita o botão até que uma opção seja selecionada
        >
          Verificar Resposta
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant="generate"
          size="sm"
          className="border-0"
          onClick={onPrevQuestion}
          disabled={prevButtonDisabled}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="generate"
          size="sm"
          className="border-0"
          onClick={onNextQuestion}
          disabled={nextButtonDisabled}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
