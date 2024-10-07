import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const cardStyles = tv({
  base: ' flex flex-col justify-between rounded-2xl h-40 w-52  border-opacity-30 shadow-lg border-2',
  variants: {
    color: {
      pink: 'bg-pink-200 border-pink-400',
      purple: 'bg-purple-200 border-purple-400',
      blue: 'bg-blue-200 border-blue-400',
      green: 'bg-green-200 border-green-400',
      lime: 'bg-lime-200 border-lime-400',
      yellow: 'bg-yellow-200 border-yellow-400',
      orange: 'bg-orange-200 border-orange-400',
      red: 'bg-red-200 border-red-400',
      cyan: 'bg-cyan-200 border-cyan-400',
      default: 'bg-gray-200 border-gray-400',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

interface CardProps extends VariantProps<typeof cardStyles> {
  themeContent: string
  children: ReactNode
}

export function Card({ themeContent, children, color }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className={cardStyles({ color })}>
      <span className="flex flex-col gap-1 px-8 py-4 font-medium text-2xl text-gray-800/70">
        {themeContent}

        <Separator className="bg-gray-900/60" />
      </span>
      {children}
    </motion.div>
  )
}
