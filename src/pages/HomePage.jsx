import { Link } from 'react-router-dom'
import HeroStoryboard from '../components/home/HeroStoryboard'
import ScrollVideoSection from '../components/home/ScrollVideoSection'
import EnergyOverview from '../components/home/EnergyOverview'
import TrustMetrics from '../components/home/TrustMetrics'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#F7F7F2]">
      <HeroStoryboard />

      <ScrollVideoSection />

      <EnergyOverview />

      <TrustMetrics />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-24 bg-[#F7F7F2]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#edf6ef] text-[#202824] p-8 sm:p-14 flex flex-col items-center text-center gap-6 relative overflow-hidden">
          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87f6b0]">
            <span className="w-2 h-2 rounded-full bg-[#006d3e] animate-ping" />
            <span className="font-label-caps text-xs text-[#00522d] uppercase tracking-wider font-bold">
              Begin Your Transition
            </span>
          </div>

          <h2 className="relative z-10 font-headline-lg text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#002519] leading-tight">
            Power Your World With Architectural Solar.
          </h2>

          <p className="relative z-10 font-body-md text-sm sm:text-base text-[#414844] max-w-xl">
            Explore our tailored packages, calculate your exact electricity bill savings, or schedule an on-site structural engineer survey.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/solutions"
              className="h-12 px-6 rounded-2xl bg-[#006d3e] text-white font-label-ui text-sm font-semibold flex items-center gap-2 hover:bg-[#123c2d] transition-all shadow-sm"
            >
              <span>Explore Solutions</span>
              <span className="material-symbols-outlined text-[18px]">
                solar_power
              </span>
            </Link>
            <Link
              to="/calculator"
              className="h-12 px-6 rounded-2xl bg-[#e2eae4] text-[#002519] font-label-ui text-sm font-semibold flex items-center gap-2 hover:bg-[#dce5de] transition-all"
            >
              <span>Calculate Savings</span>
              <span className="material-symbols-outlined text-[18px]">
                calculate
              </span>
            </Link>
            <Link
              to="/contact"
              className="h-12 px-6 rounded-2xl bg-[#87f6b0] text-[#00522d] font-label-ui text-sm font-bold flex items-center gap-2 hover:bg-[#6ddc99] transition-all"
            >
              <span>Book Site Survey</span>
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
