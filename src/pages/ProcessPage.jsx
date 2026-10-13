import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import ProcessTimeline from '../components/process/ProcessTimeline'
import { engineeringStandards } from '../data/processStepsData'

export default function ProcessPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="ENGINEERING PROCESS"
        title="Your Journey to Solar,"
        highlight="Made Simple."
        description="From drone-assisted terrace surveying to DISCOM net-metering synchronization and app handover, our in-house engineering team manages every detail."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionHeading
            badge="STEP-BY-STEP RIGOR"
            title="Four Clear Steps to Grid Sovereignty."
            description="Our turnkey methodology guarantees zero delays, uninflated generation projections, and seamless commissioning."
            alignment="center"
          />

          <ProcessTimeline showDetailedSteps={true} />
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#e7f0e9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionHeading
            badge="ON-SITE VERIFICATION"
            title="What Our Engineers Check During The Site Visit."
            description="We inspect every structural and electrical nuance before drafting your custom layout render."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                travel_explore
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                Solar Azimuth & Shading
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                Using calibrated digital sun-path modeling tools, we measure seasonal tree, parapet, water tank, and adjacent building shadows across all 12 months.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                construction
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                Slab Load & Parapet Anchor
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                We inspect RCC slab thickness, waterproofing membranes, and wind shear vectors to ensure anchoring without any terrace leakage or vibration.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                electrical_services
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                DISCOM Meter & Earthing Pit
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                We test the property main incoming distribution board, lightning arrestor path, and identify dedicated locations for chemical earthing pits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="REGULATORY SUPPORT"
            title="Full DISCOM Liaison & Paperwork Handled."
            description="Navigating state electricity boards can be cumbersome. We take care of every approval from start to finish."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {engineeringStandards.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e2eae4] text-[#006d3e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[24px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-base text-[#002519] font-bold">
                  {item.title}
                </h3>
                <p className="font-body-sm text-xs text-[#737A75] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#006d3e] text-white rounded-xl font-label-ui text-sm font-semibold hover:bg-[#123c2d] transition-colors"
            >
              <span>Schedule Free Property Survey</span>
              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
