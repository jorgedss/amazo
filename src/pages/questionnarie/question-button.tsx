import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Alternative } from './alternative'

export interface QuestionPops {
  id: number
}

export function QuestionButton({ id }: QuestionPops) {
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
        <div className="space-x-4 grid grid-cols-2">
          <div className="flex items-center p-4 text-foreground text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            deserunt in quibusdam commodi iusto libero non omnis rem molestias
            repudiandae fuga, sed magni, quidem minus minima ipsum, architecto
            sint quia.
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col flex-grow gap-2 border-emerald-600 p-2 border-l-2">
              <Alternative content="Banana" />
              <Alternative content="Maçã" />
              <Alternative content="Morango" />
              <Alternative content="Melancia" />
              <Alternative content="Melão" />
              <Alternative content="Uva" />
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
