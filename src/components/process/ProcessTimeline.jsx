import { Link } from 'react-router-dom'
import { processSteps } from '../../data/processStepsData'

export default function ProcessTimeline({ showDetailedSteps = false }) {
  return (
    <div className="flex flex-col gap-6 max-w-3xl mx-auto">
      {processSteps.map((step, index) => {
        const isLast = index === processSteps.length - 1

        return (
          <div key={step.stepNumber} className="flex gap-4 sm:gap-6">
            <div className="flex flex-col items-center">
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold font-label-caps text-sm shadow-sm ${
                  index % 2 === 0
                    ? 'bg-[#006d3e] text-white'
                    : 'bg-[#87f6b0] text-[#00522d]'
                }`}
              >
                {step.stepNumber}
              </div>
              {!isLast && (
                <div className="w-1 flex-1 bg-[#e2eae4] my-2 rounded-full" />
              )}
            </div>

            <div className={`flex flex-col flex-1 ${!isLast ? 'pb-8' : 'pb-2'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-headline-sm text-lg sm:text-xl text-[#002519] font-bold">
                  {step.title}
                </h3>
                {step.timeline && (
                  <span className="font-label-caps text-xs text-[#00522d] bg-[#87f6b0] px-3 py-1 rounded-full font-bold">
                    {step.timeline}
                  </span>
                )}
              </div>

              <p className="font-body-sm text-sm text-[#414844] mt-1.5 leading-relaxed">
                {step.description}
              </p>

              {showDetailedSteps && step.details && (
                <ul className="mt-3 flex flex-col gap-1.5 p-4 bg-[#edf6ef] rounded-2xl">
                  {step.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center gap-2 text-xs text-[#202824]">
                      <span className="material-symbols-outlined text-[16px] text-[#006d3e]">
                        check
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )
      })}

      <div className="mt-4">
        <Link
          to="/contact"
          className="w-full h-12 rounded-2xl bg-[#006d3e] text-white font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-colors shadow-sm font-semibold"
        >
          <span>Start Your Solar Journey</span>
          <span className="material-symbols-outlined text-[18px]">
            calendar_month
          </span>
        </Link>
      </div>
    </div>
  )
}
