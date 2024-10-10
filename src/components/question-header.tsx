// QuestionHeader.tsx
import { Separator } from '@/components/ui/separator'

interface QuestionHeaderProps {
  questionContent: string
}

export function QuestionHeader({ questionContent }: QuestionHeaderProps) {
  return (
    <div className="flex items-center gap-4 mr-2 p-4 pr-0 w-full text-foreground text-justify">
      <span className="flex flex-1 text-2xl">{questionContent}</span>
      <Separator
        orientation="vertical"
        className="bg-emerald-500 w-px h-full max-h-96"
      />
    </div>
  )
}
