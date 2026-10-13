import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import SolutionCard from '../components/solutions/SolutionCard'
import { solutionsData } from '../data/solutionsData'

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="SOLAR SOLUTIONS"
        title="Engineered For Residential,"
        highlight="Commercial & Industrial."
        description="From bespoke home rooftop arrays to heavy multi-megawatt industrial solar sheds, explore Solar House systems tailored to Indian power infrastructures."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionHeading
            badge="PORTFOLIO BY SCALE"
            title="Choose The System That Fits Your Infrastructure."
            description="Every tier is customized with structural load calculations, DISCOM grid clearances, and full 25-year performance monitoring."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsData.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} isDetailed={true} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#e7f0e9]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionHeading
            badge="TECHNOLOGY SPECIFICATIONS"
            title="Tier-1 Equipment Built For The Indian Climate."
            description="We select components tested for high tropical heat, dust accumulation, and heavy monsoon humidity."
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                solar_power
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                Bifacial N-Type TOPCon
              </h3>
              <p className="font-body-sm text-xs text-[#737A75] leading-relaxed">
                Generates power from both top and rear reflected sunlight, yielding up to 25% higher output over conventional mono-PERC cells.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                bolt
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                Micro & Hybrid Inverters
              </h3>
              <p className="font-body-sm text-xs text-[#737A75] leading-relaxed">
                Panel-level MPPT tracking avoids entire array loss from partial tree or chimney shading. Seamless battery storage synchronization.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                foundation
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                Galvanized Racking
              </h3>
              <p className="font-body-sm text-xs text-[#737A75] leading-relaxed">
                Hot-dip galvanized structural steel certified to withstand 170 km/h wind gusts, with zero terrace puncture or seepage risks.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <span className="material-symbols-outlined text-[32px] text-[#006d3e]">
                sensors
              </span>
              <h3 className="font-headline-sm text-lg font-bold text-[#002519]">
                IoT Telemetry
              </h3>
              <p className="font-body-sm text-xs text-[#737A75] leading-relaxed">
                Solar House mobile app provides live power flow graphics, historical DISCOM savings tallies, and automated fault alerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-xs text-[#006d3e] uppercase font-bold tracking-widest">
              FINANCIAL INCENTIVES
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#002519] font-bold">
              Subsidies, Accelerated Depreciation & Tax Offsets.
            </h2>
            <div className="flex flex-col gap-4 text-sm text-[#737A75] leading-relaxed">
              <div className="p-5 rounded-2xl bg-[#f3fbf5]">
                <h4 className="font-label-ui text-base font-bold text-[#002519]">
                  PM Surya Ghar Muft Bijli Yojana (Residential)
                </h4>
                <p className="mt-1 text-xs text-[#737A75]">
                  Get direct central government subsidies of up to ₹78,000 for residential rooftop plants up to 3kW capacity, deposited straight to your bank account.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f3fbf5]">
                <h4 className="font-label-ui text-base font-bold text-[#002519]">
                  40% Accelerated Depreciation (Commercial & Industrial)
                </h4>
                <p className="mt-1 text-xs text-[#737A75]">
                  Indian companies can claim 40% depreciation on solar assets within Year 1 under Income Tax Act Section 32, unlocking rapid cash tax savings.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl p-8 bg-[#e2eae4] flex flex-col items-center text-center gap-6">
            <span className="w-14 h-14 rounded-2xl bg-[#edf6ef] text-[#006d3e] flex items-center justify-center">
              <span className="material-symbols-outlined text-[30px]">
                calculate
              </span>
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-headline-sm text-2xl text-[#002519] font-bold">
                Calculate Your Payback
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] max-w-sm">
                Estimate how quickly a residential or commercial system will pay for itself with our interactive tool.
              </p>
            </div>
            <Link
              to="/calculator"
              className="h-12 px-8 bg-[#006d3e] text-white rounded-xl font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-colors font-semibold"
            >
              <span>Launch Solar Calculator</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
