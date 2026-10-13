export default function PageHeader({ badge, title, highlight, description }) {
  return (
    <div className="w-full bg-gradient-to-b from-[#edf6ef] via-[#e7f0e9] to-[#F7F7F2] text-[#202824] py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col gap-3">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#87f6b0]/60 w-fit">
            <span className="w-2 h-2 rounded-full bg-[#006d3e] animate-ping" />
            <span className="font-label-caps text-xs text-[#00522d] uppercase tracking-wider font-bold">
              {badge}
            </span>
          </div>
        )}
        <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002519] leading-tight">
          {title}{' '}
          {highlight && <span className="text-[#006d3e]">{highlight}</span>}
        </h1>
        {description && (
          <p className="font-body-md text-base sm:text-lg text-[#414844] max-w-2xl pt-1">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
