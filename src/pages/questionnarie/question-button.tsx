import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface QuestionPops {
  id: number
}

export function QuestionButton({ id }: QuestionPops) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          id="question"
          className="flex justify-center items-center bg-emerald-50 hover:bg-emerald-300 rounded-xl h-10 font-medium text-black text-lg"
        >
          Questão {id}
        </Button>
      </DialogTrigger>

      <DialogContent className="border-0 bg-gray-200 h-screen sm:h-dvh lg:h-[80vh]">
        <div className="flex flex-col justify-between py-4">
          <span className="px-4 font-medium text-foreground">
            Quanto é 1+1?
          </span>

          <div className="space-y-2 px-4">
            <div className="gap-4 grid grid-cols-2">
              {Array.from({ length: 4 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="flex justify-center items-center bg-gray-700 hover:bg-green-600 rounded-sm w-full h-12 font-semibold text-lg text-white"
                  >
                    2
                  </div>
                )
              })}
            </div>

            <div className="flex justify-end gap-2">
              <Button variant="generate" size="sm">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="generate" size="sm">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
