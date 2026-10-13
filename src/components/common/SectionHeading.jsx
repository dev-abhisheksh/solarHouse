export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  alignment = 'left',
  textColor = 'text-[#002519]'
}) {
  const isCenter = alignment === 'center'

  return (
    <div
      className={`flex flex-col gap-2 mb-8 ${
        isCenter ? 'items-center text-center' : 'items-start text-left'
      }`}
    >
      {badge && (
        <div className="inline-flex items-center gap-1.5 text-[#006d3e] font-label-caps text-xs uppercase tracking-widest font-bold">
          {badgeIcon && (
            <span className="material-symbols-outlined text-[16px]">
              {badgeIcon}
            </span>
          )}
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-headline-lg text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${textColor}`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-[#006d3e]">{highlight}</span>
        )}
      </h2>

      {description && (
        <p className="font-body-md text-sm sm:text-base text-[#737A75] max-w-2xl">
          {description}
        </p>
      )}
    </div>
  )
}
