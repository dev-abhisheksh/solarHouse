import { Link } from 'react-router-dom'

export default function SolutionCard({ solution, isDetailed = false }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-[#E2E5DF] flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative w-full h-56 sm:h-64">
        <img
          src={solution.image}
          alt={solution.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#002519]/80 backdrop-blur-md text-white font-label-caps text-xs uppercase font-bold tracking-wider">
          {solution.badge}
        </div>
      </div>

      <div className="p-6 flex flex-col gap-4 flex-1 justify-between">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-headline-sm text-xl sm:text-2xl text-[#002519] font-bold">
              {solution.title}
            </h3>
            <span className="font-label-ui text-xs font-semibold text-[#006d3e] bg-[#edf6ef] px-2.5 py-1 rounded-md">
              {solution.capacity}
            </span>
          </div>

          <p className="font-body-sm text-sm text-[#737A75]">
            {solution.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {solution.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-md bg-[#e7f0e9] font-label-ui text-xs text-[#002519] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {isDetailed && solution.features && (
            <div className="pt-3 border-t border-[#E2E5DF] flex flex-col gap-2">
              <span className="font-label-caps text-xs text-[#006d3e] uppercase font-bold">
                Key Technical Highlights
              </span>
              <ul className="flex flex-col gap-1.5">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#202824]">
                    <span className="material-symbols-outlined text-[16px] text-[#006d3e] shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-3 grid grid-cols-2 gap-2 p-3 bg-[#edf6ef] rounded-xl text-xs">
                <div>
                  <span className="text-[#737A75] block font-medium">Estimated Payback:</span>
                  <span className="text-[#002519] font-bold">{solution.paybackPeriod}</span>
                </div>
                <div>
                  <span className="text-[#737A75] block font-medium">Warranty:</span>
                  <span className="text-[#002519] font-bold">{solution.warranty}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link
          to={`/contact?solution=${solution.id}`}
          className="mt-2 h-11 w-full bg-[#006d3e] text-white rounded-xl font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-colors shadow-sm font-semibold"
        >
          <span>Explore {solution.title}</span>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
        </Link>
      </div>
    </div>
  )
}
