import { DialogContent } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Alternative } from './alternative'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useContext } from 'react'
import { QuestionnarieContext } from '@/context/questionnarie-context'

interface QuestionDialogContentProps {
  id: number
}

export function QuestionDialogContent({ id }: QuestionDialogContentProps) {
  const { questionnarieData } = useContext(QuestionnarieContext)

  const content = questionnarieData.find(question => question.id === id)
  return (
    <DialogContent className="bg-gray-100 mr-10 w-[90vw] h-[90vh] outline-none">
      {content && (
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-4 mr-2 p-4 pr-0 w-full text-foreground text-justify">
            <span className="flex flex-1">{content.question}</span>
            <Separator
              orientation="vertical"
              className="bg-emerald-500 w-px h-full max-h-96"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col flex-grow justify-center pl-4">
              {content.options.map(option => {
                return <Alternative key={option} content={option} />
              })}
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="generate"
                size="sm"
                className="border-0"
                disabled
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="generate" size="sm" className="border-0">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </DialogContent>
  )
}
