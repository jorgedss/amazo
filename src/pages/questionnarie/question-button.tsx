import { Button } from '@/components/ui/button'

export interface QuestionPops {
  id: number
}

export function QuestionButton({ id }: QuestionPops) {
  return (
    <Button
      id="question"
      className="flex justify-center items-center bg-emerald-50 hover:bg-emerald-300 rounded-xl h-10 font-medium text-black text-lg"
    >
      Questão {id}
    </Button>
  )
}
