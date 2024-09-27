import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Alternative } from './alternative'
import { Separator } from '@radix-ui/react-separator'

export interface QuestionPops {
  id: number
  question: string
  options: string[]
  answer: string
}

export function QuestionButton({
  id,
  question,
  options,
  answer,
}: QuestionPops) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id="question"
          className="justify-start items-start bg-emerald-700 hover:bg-emerald-500 rounded-md h-40 font-medium text-4xl text-muted tracking-wide"
        >
          Tema {id}
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-gray-100 mr-10 w-[90vw] h-[90vh] outline-none">
        <div className="grid grid-cols-2">
          <div className="flex items-center gap-4 mr-2 p-4 pr-0 w-full text-foreground text-justify">
            <span className="flex flex-1">{question}</span>
            <Separator
              orientation="vertical"
              className="bg-emerald-500 w-px h-full max-h-96"
            />
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col flex-grow justify-center pl-4">
              {options.map(option => {
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
      </DialogContent>
    </Dialog>
  )
}
