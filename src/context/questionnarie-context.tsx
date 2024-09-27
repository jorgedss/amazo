import { api } from '@/lib/axios'
import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface QuestionnarieProviderProps {
  children: ReactNode
}

interface QuestionnaireContextType {
  questionnarieData: QuestionDataTypes[]
}

interface QuestionDataTypes {
  id: number
  question: string
  options: string[]
  answer: string
}

export const QuestionnarieContext = createContext(
  {} as QuestionnaireContextType
)

export function QuestionnarieContextProvider({
  children,
}: QuestionnarieProviderProps) {
  const [questionnarieData, setQuestionnarieData] = useState<
    QuestionDataTypes[]
  >([])

  async function loadQuestionnarieData() {
    const response = await api.get<QuestionDataTypes[]>('/questions')
    setQuestionnarieData(response.data)
  }

  useEffect(() => {
    loadQuestionnarieData()
  }, [])

  return (
    <QuestionnarieContext.Provider value={{ questionnarieData }}>
      {children}
    </QuestionnarieContext.Provider>
  )
}
