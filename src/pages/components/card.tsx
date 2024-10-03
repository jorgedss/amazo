import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import { Ellipsis } from 'lucide-react'
import type { ReactNode } from 'react'

interface CardProps {
  themeContent: string
  colorClasses: string
  children: ReactNode
}

export function Card({ themeContent, children, colorClasses }: CardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={` relative flex flex-col justify-between rounded-md h-40 border-opacity-30 shadow-lg border-2 ${
        colorClasses
      }`}
    >
      <span className="px-4 py-2 font-bold text-2xl text-slate-700">
        {themeContent}
        <Button
          variant="ghost"
          className="top-1 right-1 absolute bg-transparent p-0 rounded-full h-auto text-slate-700"
          onClick={() => alert('Opções')}
        >
          <Ellipsis />
        </Button>
        <Separator className="bg-slate-900" />
      </span>
      {children}
    </motion.div>
  )
}
