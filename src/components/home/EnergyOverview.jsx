import { Link } from 'react-router-dom'
import SectionHeading from '../common/SectionHeading'
import { valueHighlights } from '../../data/metricsData'

export default function EnergyOverview() {
  return (
    <section className="w-full px-5 sm:px-8 py-14 sm:py-20 bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          badge="ENERGY, REIMAGINED"
          badgeIcon="wb_sunny"
          title="Your Roof Has More Potential Than You Think."
          description="Make the most of every sunny day with thoughtfully designed solar solutions that help homes and commercial estates generate cleaner electricity without compromising architectural grace."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-md bg-white border border-[#E2E5DF]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGGcltfOOUzNPjQZ1NKLKtfA6NdRNDJfXlXV8XS0fx2jt_VHIc-pJ8zKAuDSXxXFL7DxgTSquQuhBFjkvuUz-QvgSS9gjhN2eYLbtX8FBC6Pihwki1M6EJx2ZQFrjNC1vIz00q9ATorK_hlg9pYvQ6xUWkEak0O4I8AeZVAtKvedW3JDmTB9k8BChahQu1mLCX_SW0fA7mkIjzSL9T6-3rASqRZKDG9NDMJp_SMEbIDQqHW4ELGeYb"
              alt="Overhead aerial perspective of architectural luxury villa with rooftop solar integration in Bangalore"
              className="w-full h-64 sm:h-72 object-cover object-center"
            />
            <div className="p-5 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-caps text-xs text-[#006d3e] font-bold uppercase">
                  Case Snapshot
                </span>
                <span className="font-label-ui text-sm text-[#002519] font-bold">
                  Bangalore Villa • 12 kWp
                </span>
              </div>
              <p className="font-body-sm text-sm text-[#737A75]">
                Curated layout preserving terrace lifestyle lounges, fully concealed raceways, and 94% daytime autonomy.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-4">
            {valueHighlights.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-white border border-[#E2E5DF] shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-[#edf6ef] text-[#006d3e] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">
                    {item.icon}
                  </span>
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-label-ui text-base text-[#002519] font-bold">
                      {item.title}
                    </h3>
                    <span className={`px-2.5 py-0.5 rounded-full font-label-caps text-xs ${item.badgeBg}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="font-body-sm text-sm text-[#737A75]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}

            <Link
              to="/solutions"
              className="w-full h-12 mt-2 rounded-xl bg-[#e7f0e9] text-[#002519] font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#e2eae4] transition-colors font-semibold"
            >
              <span>Discover Full System Benefits</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
