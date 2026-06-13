import { Link } from 'react-router-dom'
import { Clock, Users, ArrowRight } from 'lucide-react'

export default function CourseCard({ course }) {
  const { id, title, description, duration, seats } = course

  return (
    <article className="card flex flex-col group">
      {/* Colour stripe — amber accent */}
      <div className="h-1.5 bg-gradient-to-r from-amber-400 to-amber-600" />

      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="font-display font-700 text-navy-800 text-lg leading-snug group-hover:text-amber-600 transition-colors">
          {title}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>

        <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mt-1">
          {duration && (
            <span className="flex items-center gap-1"><Clock size={12} /> {duration}</span>
          )}
          {seats !== undefined && (
            <span className="flex items-center gap-1"><Users size={12} /> {seats} seats</span>
          )}
        </div>

        <Link
          to={`/courses/${id}`}
          className="mt-2 inline-flex items-center gap-1.5 text-amber-600 hover:text-amber-700 text-sm font-600 transition-colors"
        >
          View details <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  )
}