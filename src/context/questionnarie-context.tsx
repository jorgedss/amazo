import { api } from '@/lib/axios'
import { createContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

interface CardProviderProps {
  children: ReactNode
}

interface CardContextType {
  questionnarieData: CardDataResponse[]
  cardSummary: CardSummaryResponse | undefined
}

export interface QuestionTypes {
  questionId: string
  questionContent: string
  optionsToChoice: string[]
  answer: string
}

export interface CardDataResponse {
  id: string
  questions: QuestionTypes[]
}

export interface CardSummary {
  id: string
  theme: string
  color:
    | 'pink'
    | 'purple'
    | 'blue'
    | 'green'
    | 'lime'
    | 'yellow'
    | 'orange'
    | 'red'
    | 'default'
}

type CardSummaryResponse = CardSummary[]

export const CardContext = createContext({} as CardContextType)

export function CardContextProvider({ children }: CardProviderProps) {
  const [questionnarieData, setCardData] = useState<CardDataResponse[]>([])
  const [cardSummary, setCardSummary] = useState<CardSummaryResponse>([])

  async function loadCardData() {
    const response = await api.get<CardDataResponse[]>('/cards')
    setCardData(response.data)
    //console.log(response.data.questions)
  }

  async function loadCardSummary() {
    const response = await api.get('/cardSummary')
    setCardSummary(response.data)
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    loadCardData()
    loadCardSummary()
  }, [])

  return (
    <CardContext.Provider value={{ questionnarieData, cardSummary }}>
      {children}
    </CardContext.Provider>
  )
}
