import { Link } from 'react-router-dom'

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 w-full z-40 pb-safe bg-[#F7F7F2]/95 backdrop-blur-xl border-t border-[#E2E5DF] shadow-[0_-2px_12px_rgba(18,60,45,0.08)] lg:hidden">
      <div className="flex items-center justify-between gap-3 px-4 py-2.5 max-w-lg mx-auto">
        <Link
          to="/calculator"
          className="flex-1 h-11 rounded-lg bg-[#e7f0e9] border border-[#E2E5DF] flex items-center justify-center gap-2 text-[#002519] font-label-ui text-xs sm:text-sm font-semibold hover:bg-[#e2eae4] transition-colors active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px] text-[#006d3e]">
            calculate
          </span>
          <span>Calculate Savings</span>
        </Link>

        <Link
          to="/contact"
          className="flex-1 h-11 rounded-lg bg-[#006d3e] text-white flex items-center justify-center gap-2 font-label-ui text-xs sm:text-sm font-semibold hover:bg-[#123c2d] transition-colors shadow-[0_4px_14px_rgba(54,169,107,0.3)] active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">
            calendar_month
          </span>
          <span>Book Consultation</span>
        </Link>
      </div>
    </nav>
  )
}
