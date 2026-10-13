import { trustMetrics } from '../../data/metricsData'

export default function TrustMetrics() {
  return (
    <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#002519] text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 items-center text-center">
          <span className="font-label-caps text-xs tracking-widest text-[#8af9b3] uppercase font-bold">
            TANGIBLE FOOTPRINT
          </span>
          <h2 className="font-headline-lg text-2xl sm:text-4xl text-white font-bold tracking-tight">
            Better Energy Choices. A Brighter Tomorrow.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trustMetrics.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-[#123c2d]/80 backdrop-blur-md border border-white/10 flex flex-col items-center text-center shadow-lg hover:border-[#8af9b3]/40 transition-colors"
            >
              <span className={`font-stat-metric text-4xl sm:text-5xl font-bold leading-none mb-3 ${item.highlightColor}`}>
                {item.metric}
              </span>
              <span className="font-headline-sm text-lg sm:text-xl text-white font-bold">
                {item.title}
              </span>
              <span className="font-body-sm text-sm text-[#e2eae4] mt-2">
                {item.subtitle}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
