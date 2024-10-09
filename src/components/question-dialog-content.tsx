import { DialogContent } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useEffect, useState } from 'react'

import type { QuestionTypes } from '@/context/questionnarie-context'
import type { CardDataResponse } from '@/context/questionnarie-context'

interface QuestionDialogContentProps {
  handleSetCurrentId: (id: string) => void
  maxIndex: number
  content: QuestionTypes | undefined
  currentCard: CardDataResponse
}

interface AnswerData {
  questionId: string
  answer: string
  isVerified: boolean
}

interface ResultProps {
  resultId: string
  isCorrect: true | false
}

export function QuestionDialogContent({
  handleSetCurrentId,
  content,
  maxIndex,
  currentCard,
}: QuestionDialogContentProps) {
  const [selectedValue, setSelectedValue] = useState('')
  const [userAnswers, setUserAnswers] = useState<AnswerData[]>([])
  const [questionResult, setQuestionResult] = useState<ResultProps[]>([])

  useEffect(() => {
    // Resetar a seleção quando o conteúdo mudar e atualizar com a resposta armazenada, se existir
    const existingAnswer = userAnswers.find(
      answer => answer.questionId === content?.questionId
    )
    setSelectedValue(existingAnswer ? existingAnswer.answer : '')
  }, [content, userAnswers])

  const handleSubmit = (questionId: string) => {
    if (selectedValue === content?.answer) {
      setQuestionResult(prevResult => {
        return [...prevResult, { resultId: questionId, isCorrect: true }]
      })
    } else {
      setQuestionResult(prevResult => {
        return [...prevResult, { resultId: questionId, isCorrect: false }]
      })
    }

    setUserAnswers(prevAnswers => {
      if (!content) {
        return prevAnswers
      }
      const newAnswers = prevAnswers.filter(
        answer => answer.questionId !== content?.questionId
      )

      return [
        ...newAnswers,
        {
          questionId: content.questionId,
          answer: selectedValue,
          isVerified: true,
        },
      ]
    })
  }
  const isVerified = userAnswers.find(
    answer => answer.questionId === content?.questionId && answer.isVerified
  )

  const currentIndexQuestion = currentCard?.questions.findIndex(
    question => question.questionId === content?.questionId
  )

  function changeRadioItemStyle(option: string) {
    if (!isVerified) {
      return ''
    }

    const currentResult = questionResult.find(
      result => result.resultId === content?.questionId
    )

    if (currentResult?.isCorrect && option === content?.answer) {
      return 'text-emerald-500 border-2 border-emerald-600 bg-emerald-500'
    }
    if (!currentResult?.isCorrect && option === selectedValue) {
      return 'text-rose-500 bg-rose-500 border-2 border-rose-600'
    }
    if (!currentResult?.isCorrect && option === content?.answer) {
      return 'text-emerald-500 border-2 border-emerald-600 bg-emerald-500'
    }
  }

  return (
    <DialogContent className="bg-gray-100 mr-10 w-[90vw] h-[90vh] outline-none">
      {content && (
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-4 mr-2 p-4 pr-0 w-full text-foreground text-justify">
            <span className="flex flex-1 text-2xl">
              {content.questionContent}
            </span>
            <Separator
              orientation="vertical"
              className="bg-emerald-500 w-px h-full max-h-96"
            />
          </div>

          <div className="flex flex-col justify-between">
            <RadioGroup
              value={selectedValue}
              onValueChange={setSelectedValue}
              className="flex flex-grow justify-center items-center pl-4"
            >
              <div className="flex flex-col mt-16 w-full">
                {content.optionsToChoice.map((option, index) => {
                  const optionId = `option-${index}`
                  return (
                    <label
                      key={option}
                      htmlFor={optionId}
                      className="border-2 hover:bg-zinc-200/80 pl-2 border-transparent hover:rounded-sm w-full h-14 text-justify text-lg"
                    >
                      <RadioGroupItem
                        disabled={isVerified !== undefined}
                        value={option}
                        id={optionId}
                        className={`border-gray-600 mr-2 text-foreground ${changeRadioItemStyle(option)}`}
                      />
                      <span>{option}</span>
                    </label>
                  )
                })}
              </div>
            </RadioGroup>

            <div className="flex justify-between items-center pl-2">
              <Button
                onClick={() => handleSubmit(content.questionId)}
                size="sm"
                variant="generate"
                disabled={isVerified !== undefined} // Desabilita o botão até que uma opção seja selecionada
              >
                Verificar Resposta
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="generate"
                  size="sm"
                  className="border-0"
                  onClick={() =>
                    handleSetCurrentId(
                      currentCard.questions[currentIndexQuestion - 1].questionId
                    )
                  }
                  disabled={currentIndexQuestion === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  variant="generate"
                  size="sm"
                  className="border-0"
                  onClick={() =>
                    handleSetCurrentId(
                      currentCard.questions[currentIndexQuestion + 1].questionId
                    )
                  }
                  disabled={currentIndexQuestion === maxIndex}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  )
}
