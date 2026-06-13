import { SearchX } from 'lucide-react'

export default function EmptyState({ title = 'Nothing here yet', description = '', action }) {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <div className="bg-navy-100 text-navy-400 p-4 rounded-full mb-4">
        <SearchX size={32} />
      </div>
      <h3 className="font-display font-700 text-navy-700 text-lg mb-1">{title}</h3>
      {description && <p className="text-slate-500 text-sm max-w-xs">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}