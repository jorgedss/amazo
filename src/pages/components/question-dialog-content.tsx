import { DialogContent } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { QuestionDataTypes } from '@/context/questionnarie-context'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useEffect, useState } from 'react'

interface QuestionDialogContentProps {
  currentId: number
  handleSetCurrentId: (id: number) => void
  maxIndex: number
  content: QuestionDataTypes | undefined
}

export function QuestionDialogContent({
  currentId,
  handleSetCurrentId,
  content,
  maxIndex,
}: QuestionDialogContentProps) {
  const [selectedValue, setSelectedValue] = useState('')

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    // Resetar a seleção quando o conteúdo mudar
    setSelectedValue('')
  }, [content, currentId])

  const handleSubmit = () => {
    if (selectedValue === content?.answer) {
      alert('Correto!')
    } else {
      alert(`Incorreto. A resposta certa é: ${content?.answer}`)
    }
  }

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
            <RadioGroup
              value={selectedValue}
              onValueChange={setSelectedValue}
              className="flex flex-grow justify-center items-center pl-4"
            >
              <div className="flex flex-col w-full">
                {content.options.map((option, index) => {
                  const optionId = `option-${index}`
                  return (
                    <label
                      key={option}
                      htmlFor={optionId}
                      className="border-2 hover:bg-zinc-200/80 pl-2 border-transparent hover:rounded-sm w-full h-14 text-justify text-lg"
                    >
                      <RadioGroupItem
                        value={option}
                        id={optionId}
                        className="border-gray-300 mr-2 text-green-600"
                      />
                      <span>{option}</span>
                    </label>
                  )
                })}
              </div>
            </RadioGroup>

            <div className="flex justify-between items-center pl-2">
              <Button
                onClick={handleSubmit}
                size="sm"
                variant="generate"
                disabled={!selectedValue} // Desabilita o botão até que uma opção seja selecionada
              >
                Verificar Resposta
              </Button>

              <div className="flex gap-2">
                <Button
                  variant="generate"
                  size="sm"
                  className="border-0"
                  onClick={() => handleSetCurrentId(Number(currentId) - 1)}
                  disabled={currentId === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>

                <Button
                  variant="generate"
                  size="sm"
                  className="border-0"
                  onClick={() => handleSetCurrentId(Number(currentId) + 1)}
                  disabled={currentId === maxIndex}
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
