export interface AlternativeProps {
  content: string
}

export function Alternative({ content }: AlternativeProps) {
  return (
    <div className="border-2 hover:border-emerald-500 p-2 border-transparent hover:rounded-sm w-full h-14 text-justify text-lg">
      {content}
    </div>
  )
}
