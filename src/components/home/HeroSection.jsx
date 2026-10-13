import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="w-full bg-white px-5 sm:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#edf6ef] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#006d3e] animate-ping" />
            <span className="font-label-caps text-xs text-[#00522d] uppercase tracking-wider font-bold">
              Architectural Rooftop Solar
            </span>
          </div>

          <h1 className="font-headline-lg text-3xl sm:text-5xl lg:text-6xl text-[#002519] font-extrabold tracking-tight leading-[1.12]">
            Clean Solar Energy.{' '}
            <span className="text-[#006d3e]">Architecturally Integrated.</span>
          </h1>

          <p className="font-body-md text-base sm:text-lg text-[#737A75] max-w-xl leading-relaxed">
            Transform your rooftop into a high-performance power generator without compromising terrace beauty. Precision German-grade engineering, zero roof puncture, and 25 years of guaranteed generation.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
            <Link
              to="/contact"
              className="h-12 px-7 bg-[#006d3e] text-white rounded-2xl font-label-ui text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-all active:scale-95"
            >
              <span>Book Free Site Survey</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/calculator"
              className="h-12 px-7 bg-[#edf6ef] text-[#002519] rounded-2xl font-label-ui text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#e2eae4] transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-[#006d3e]">
                calculate
              </span>
              <span>Calculate Savings</span>
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="flex flex-col gap-1 p-4 rounded-2xl bg-[#edf6ef]">
              <span className="font-headline-sm text-lg sm:text-xl font-bold text-[#006d3e]">
                25 Yrs
              </span>
              <span className="font-label-ui text-xs text-[#414844]">
                Performance Warranty
              </span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-2xl bg-[#edf6ef]">
              <span className="font-headline-sm text-lg sm:text-xl font-bold text-[#006d3e]">
                0 Puncture
              </span>
              <span className="font-label-ui text-xs text-[#414844]">
                Terrace Protection
              </span>
            </div>
            <div className="flex flex-col gap-1 p-4 rounded-2xl bg-[#edf6ef]">
              <span className="font-headline-sm text-lg sm:text-xl font-bold text-[#006d3e]">
                Tier-1
              </span>
              <span className="font-label-ui text-xs text-[#414844]">
                TOPCon Bifacial
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#edf6ef]">
            <img
              src="/hero-section-homepage.png"
              alt="Solar House Rooftop Solutions architectural solar rooftop estate"
              className="w-full h-auto object-cover rounded-3xl"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 rounded-2xl bg-white/90 backdrop-blur-md flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#006d3e]" />
              <span className="font-label-ui text-xs sm:text-sm font-bold text-[#002519]">
                Solar House Rooftop Solutions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
