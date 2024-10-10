import { DialogContent } from '@/components/ui/dialog'

import { useEffect, useState } from 'react'

import type { QuestionTypes } from '@/context/questionnarie-context'
import type { CardDataResponse } from '@/context/questionnarie-context'
import { QuestionHeader } from './question-header'
import { QuestionNavigation } from './question-navigation'
import { QuestionOptions } from './question-options'

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
      return 'text-gray-600'
    }

    const currentResult = questionResult.find(
      result => result.resultId === content?.questionId
    )

    if (currentResult?.isCorrect && option === content?.answer) {
      return 'text-white border-2 border-green-700 bg-green-500'
    }
    if (!currentResult?.isCorrect && option === selectedValue) {
      return 'text-white bg-rose-500 border-2 border-rose-600'
    }
    if (!currentResult?.isCorrect && option === content?.answer) {
      return 'bg-green-200'
    }
  }

  return (
    <DialogContent className="bg-gray-100 mr-10 w-[90vw] h-[90vh] outline-none">
      {content && (
        <div className="grid grid-cols-2">
          <QuestionHeader questionContent={content.questionContent} />

          <div className="flex flex-col justify-between">
            <QuestionOptions
              isVerified={!!isVerified}
              options={content.optionsToChoice}
              onValueChange={setSelectedValue}
              changeRadioItemStyle={changeRadioItemStyle}
              selectedValue={selectedValue}
            />

            <QuestionNavigation
              isVerified={isVerified !== undefined}
              onSubmit={() => handleSubmit(content.questionId)}
              onPrevQuestion={() =>
                handleSetCurrentId(
                  currentCard.questions[currentIndexQuestion - 1].questionId
                )
              }
              onNextQuestion={() =>
                handleSetCurrentId(
                  currentCard.questions[currentIndexQuestion + 1].questionId
                )
              }
              prevButtonDisabled={currentIndexQuestion === 0}
              nextButtonDisabled={currentIndexQuestion === maxIndex}
            />
          </div>
        </div>
      )}
    </DialogContent>
  )
}
