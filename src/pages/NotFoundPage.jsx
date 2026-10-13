import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-5 py-20 text-center">
      <div className="w-16 h-16 rounded-2xl bg-[#edf6ef] text-[#006d3e] flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-[36px]">
          wb_twilight
        </span>
      </div>
      <span className="font-label-caps text-xs text-[#006d3e] font-bold uppercase tracking-widest">
        Page Not Found
      </span>
      <h1 className="font-headline-lg text-4xl sm:text-5xl text-[#002519] font-bold mt-2 mb-3">
        404
      </h1>
      <p className="font-body-md text-sm sm:text-base text-[#737A75] max-w-md mb-6">
        The page you are looking for does not exist or has been moved to another architectural coordinate.
      </p>
      <Link
        to="/"
        className="h-12 px-6 bg-[#006d3e] text-white rounded-xl font-label-ui text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-colors shadow-sm"
      >
        <span className="material-symbols-outlined text-[18px]">home</span>
        <span>Return to Homepage</span>
      </Link>
    </div>
  )
}
