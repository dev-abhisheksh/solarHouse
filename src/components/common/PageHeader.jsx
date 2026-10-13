export default function PageHeader({ badge, title, highlight, description }) {
  return (
    <div className="w-full bg-[#123c2d] text-white py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#006d3e]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-3">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#8af9b3] animate-ping" />
            <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
              {badge}
            </span>
          </div>
        )}
        <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}{' '}
          {highlight && <span className="text-[#8af9b3]">{highlight}</span>}
        </h1>
        {description && (
          <p className="font-body-md text-base sm:text-lg text-[#e2eae4] max-w-2xl pt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
