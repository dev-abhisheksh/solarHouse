import { Link } from 'react-router-dom'
import HeroStoryboard from '../components/home/HeroStoryboard'
import ScrollVideoSection from '../components/home/ScrollVideoSection'
import EnergyOverview from '../components/home/EnergyOverview'
import TrustMetrics from '../components/home/TrustMetrics'

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroStoryboard />

      <ScrollVideoSection />

      <EnergyOverview />

      <TrustMetrics />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#002519] text-white p-8 sm:p-12 flex flex-col items-center text-center gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#006d3e]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#8af9b3] animate-ping" />
            <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
              Begin Your Transition
            </span>
          </div>

          <h2 className="relative z-10 font-headline-lg text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Power Your World With Architectural Solar.
          </h2>

          <p className="relative z-10 font-body-md text-sm sm:text-base text-[#e2eae4] max-w-xl">
            Explore our tailored packages, calculate your exact electricity bill savings, or schedule an on-site structural engineer survey.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/solutions"
              className="h-12 px-6 rounded-xl bg-[#006d3e] text-white font-label-ui text-sm font-semibold flex items-center gap-2 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)]"
            >
              <span>Explore Solutions</span>
              <span className="material-symbols-outlined text-[18px]">
                solar_power
              </span>
            </Link>
            <Link
              to="/calculator"
              className="h-12 px-6 rounded-xl bg-white/10 backdrop-blur-md text-white font-label-ui text-sm font-semibold flex items-center gap-2 hover:bg-white/20 transition-all border border-white/15"
            >
              <span>Calculate Savings</span>
              <span className="material-symbols-outlined text-[18px]">
                calculate
              </span>
            </Link>
            <Link
              to="/contact"
              className="h-12 px-6 rounded-xl bg-[#8af9b3] text-[#002116] font-label-ui text-sm font-bold flex items-center gap-2 hover:bg-[#c0ecd6] transition-all shadow-md"
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
