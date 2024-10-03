// import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
// import { Ellipsis } from 'lucide-react'
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
      className={` relative flex  flex-col justify-between rounded-2xl h-40 border-opacity-30 shadow-lg border-2 ${
        colorClasses
      }`}
    >
      <span className="flex flex-col gap-1 px-8 py-4 font-medium text-2xl text-gray-800/70">
        {themeContent}
        {/* <Button
          variant="ghost"
          className="top-1 right-1 absolute bg-transparent p-0 rounded-full h-auto text-slate-700"
          onClick={() => alert('Opções')}
        >
          <Ellipsis />
        </Button> */}
        <Separator className="bg-gray-900/60" />
      </span>
      {children}
    </motion.div>
  )
}
