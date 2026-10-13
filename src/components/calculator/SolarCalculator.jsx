import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SolarCalculator({ initialSector = 'residential', initialBill = 8500 }) {
  const [sector, setSector] = useState(initialSector)
  const [bill, setBill] = useState(initialBill)

  const ratePerUnit = sector === 'residential' ? 8.5 : 10.5
  const monthlyUnits = Math.round(bill / ratePerUnit)
  const dailyGenNeeded = monthlyUnits / 30
  const recommendedKw = Math.max(1.5, Number((dailyGenNeeded / 4.2).toFixed(1)))
  const baseCostPerKw = sector === 'residential' ? 60000 : 54000
  const systemCost = Math.round(recommendedKw * baseCostPerKw)
  const monthlySaving = Math.round(bill * 0.86)
  const annualSaving = monthlySaving * 12
  const paybackYears = (systemCost / annualSaving).toFixed(1)
  const areaRequired = Math.round(recommendedKw * 85)

  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl bg-white shadow-xl border border-[#E2E5DF] p-5 sm:p-8 flex flex-col gap-6">
      <div className="flex bg-[#e7f0e9] p-1.5 rounded-xl">
        <button
          type="button"
          onClick={() => setSector('residential')}
          className={`flex-1 py-2.5 rounded-lg font-label-ui text-sm font-semibold transition-all ${
            sector === 'residential'
              ? 'bg-[#002519] text-white shadow-sm'
              : 'text-[#202824] hover:bg-[#e2eae4]'
          }`}
        >
          Residential
        </button>
        <button
          type="button"
          onClick={() => setSector('commercial')}
          className={`flex-1 py-2.5 rounded-lg font-label-ui text-sm font-semibold transition-all ${
            sector === 'commercial'
              ? 'bg-[#002519] text-white shadow-sm'
              : 'text-[#202824] hover:bg-[#e2eae4]'
          }`}
        >
          Commercial
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-label-ui text-sm text-[#737A75]">
            Average Monthly Electricity Bill:
          </span>
          <span className="font-headline-sm text-2xl text-[#006d3e] font-bold">
            ₹{bill.toLocaleString('en-IN')}
          </span>
        </div>

        <input
          type="range"
          min="3000"
          max="50000"
          step="500"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
          className="w-full h-2.5 bg-[#e2eae4] rounded-lg appearance-none cursor-pointer accent-[#006d3e]"
        />

        <div className="flex justify-between font-label-caps text-xs text-[#737A75]">
          <span>₹3,000/mo</span>
          <span>₹25,000/mo</span>
          <span>₹50,000+/mo</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="p-3.5 rounded-xl bg-[#edf6ef] flex flex-col">
          <span className="font-label-caps text-xs text-[#737A75] uppercase">
            Estimated Area
          </span>
          <span className="font-label-ui text-base text-[#002519] font-bold mt-1">
            ~{areaRequired} sq.ft
          </span>
        </div>
        <div className="p-3.5 rounded-xl bg-[#edf6ef] flex flex-col">
          <span className="font-label-caps text-xs text-[#737A75] uppercase">
            Avg Monthly Units
          </span>
          <span className="font-label-ui text-base text-[#002519] font-bold mt-1">
            ~{monthlyUnits} kWh
          </span>
        </div>
      </div>

      <div className="rounded-xl bg-[#123c2d] text-white p-6 flex flex-col gap-5 relative overflow-hidden shadow-inner">
        <div className="absolute -right-6 -bottom-6 w-36 h-36 bg-[#006d3e]/30 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="font-label-caps text-xs text-[#e2eae4] uppercase block">
              Suggested Capacity
            </span>
            <span className="font-headline-md text-3xl font-bold text-[#8af9b3] mt-1 block">
              {recommendedKw} kWp
            </span>
          </div>
          <div className="text-right">
            <span className="font-label-caps text-xs text-[#e2eae4] uppercase block">
              Estimated Investment
            </span>
            <span className="font-label-ui text-lg font-bold text-[#ffdf97] mt-1 block">
              ₹{systemCost.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="font-label-caps text-xs text-[#e2eae4] uppercase block">
              Monthly Savings
            </span>
            <span className="font-headline-sm text-xl font-bold text-white mt-1 block">
              ₹{monthlySaving.toLocaleString('en-IN')}
            </span>
          </div>
          <div>
            <span className="font-label-caps text-xs text-[#e2eae4] uppercase block">
              Annual Savings
            </span>
            <span className="font-headline-sm text-xl font-bold text-[#8af9b3] mt-1 block">
              ₹{annualSaving.toLocaleString('en-IN')}
            </span>
          </div>
        </div>

        <div className="p-3 rounded-lg bg-white/10 flex items-center justify-between text-sm">
          <span className="text-[#e2eae4] flex items-center gap-1.5 font-medium">
            <span className="material-symbols-outlined text-[18px] text-[#ffdf97]">
              speed
            </span>
            Projected Full Payback:
          </span>
          <span className="font-label-ui text-base text-[#ffdf97] font-bold">
            ~{paybackYears} Years
          </span>
        </div>
      </div>

      <p className="font-body-sm text-xs text-[#737A75] leading-relaxed">
        *Estimates incorporate regional DISCOM tariff slab structures and typical tropical solar irradiance in India. Subsidies under PM Surya Ghar Yojana may further reduce initial residential costs up to ₹78,000.
      </p>

      <Link
        to={`/contact?sector=${sector}&bill=${bill}&capacity=${recommendedKw}`}
        className="h-12 w-full rounded-xl bg-[#006d3e] text-white font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)] font-semibold active:scale-95"
      >
        <span>Claim Free Site Survey for This Estimate</span>
        <span className="material-symbols-outlined text-[18px]">
          verified
        </span>
      </Link>
    </div>
  )
}
