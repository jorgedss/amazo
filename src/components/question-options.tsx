import { RadioGroup, RadioGroupItem } from './ui/radio-group'

interface QuestionOptionsProps {
  options: string[]
  selectedValue: string
  isVerified: boolean
  onValueChange: (value: string) => void
  changeRadioItemStyle: (option: string) => string | undefined
}

export function QuestionOptions({
  selectedValue,
  changeRadioItemStyle,
  isVerified,
  onValueChange,
  options,
}: QuestionOptionsProps) {
  return (
    <RadioGroup
      value={selectedValue}
      onValueChange={onValueChange}
      className="flex flex-grow justify-center items-center pl-4"
    >
      <div className="flex flex-col gap-2 mt-16 w-full">
        {options.map((option, index) => {
          const optionId = `option-${index}`
          const alternatives = ['a', 'b', 'c', 'd', 'e']
          return (
            <label
              key={option}
              htmlFor={optionId}
              className="flex items-center hover:bg-zinc-200/80 pl-2 hover:rounded-sm w-full h-14 text-justify text-lg"
            >
              <div className="relative flex justify-center items-center mr-2">
                <RadioGroupItem
                  disabled={isVerified}
                  value={option}
                  id={optionId}
                  className="w-6 h-6 focus:outline-none focus:ring-2"
                />

                <span
                  className={`${changeRadioItemStyle(option)} flex  w-6 h-6 text-sm items-center justify-center leading-none rounded-full  absolute `}
                >{`${alternatives[index]}`}</span>
              </div>

              <span>{option}</span>
            </label>
          )
        })}
      </div>
    </RadioGroup>
  )
}
