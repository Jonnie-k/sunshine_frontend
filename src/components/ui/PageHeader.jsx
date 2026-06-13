export default function PageHeader({ title, subtitle, children }) {
  return (
    <section className="page-header">
      <div className="section-wrapper">
        <h1 className="font-display font-800 text-3xl sm:text-4xl text-white mb-2">
          {title}
        </h1>
        {subtitle && (
          <p className="text-navy-200 text-base sm:text-lg max-w-2xl">{subtitle}</p>
        )}
        {children}
      </div>
    </section>
  )
}