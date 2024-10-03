import { Separator } from '@/components/ui/separator'
import type { ReactNode } from 'react'

interface CardProps {
  themeContent: string
  colorClasses: string
  children: ReactNode
}

export function Card({ themeContent, children, colorClasses }: CardProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-md h-40 border-opacity-30 shadow-lg border-2 ${
        colorClasses
      }`}
    >
      <span className="px-4 py-2 font-bold text-2xl text-slate-800">
        {themeContent} <Separator className="bg-slate-600" />
      </span>
      {children}
    </div>
  )
}
