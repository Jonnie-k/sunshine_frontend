export default function Spinner({ fullPage = false, size = 32 }) {
  const spinner = (
    <svg
      width={size} height={size}
      viewBox="0 0 32 32"
      className="animate-spin text-amber-500"
      aria-label="Loading"
    >
      <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor"
        strokeWidth="3" strokeDasharray="56" strokeDashoffset="42"
        strokeLinecap="round"
      />
    </svg>
  )

  if (fullPage) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        {spinner}
      </div>
    )
  }

  return spinner
}