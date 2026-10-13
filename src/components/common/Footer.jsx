import { Link } from 'react-router-dom'
import { brandDetails } from '../../data/navigationData'

export default function Footer() {
  return (
    <footer className="w-full px-5 sm:px-8 py-12 bg-[#002519] text-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="font-headline-sm text-2xl font-bold tracking-tight text-white">
              {brandDetails.name}
            </span>
            <span className="px-2.5 py-0.5 rounded bg-[#006d3e]/40 text-[#8af9b3] font-label-caps text-xs uppercase">
              {brandDetails.subTagline}
            </span>
          </div>
          <p className="font-body-sm text-sm text-[#e2eae4] max-w-md">
            Harmonizing timeless solar abundance with uncompromising architectural modernism and Tier-1 engineering reliability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2.5">
            <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
              Solutions
            </span>
            <Link to="/solutions" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Residential Solar
            </Link>
            <Link to="/solutions" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Commercial Power
            </Link>
            <Link to="/solutions" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Industrial Mega-Scale
            </Link>
            <Link to="/calculator" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Savings Estimator
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
              Engineering
            </span>
            <Link to="/about" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Quality Standards
            </Link>
            <Link to="/projects" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Installed Projects
            </Link>
            <Link to="/process" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Engineering Process
            </Link>
            <Link to="/faqs" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              MNRE & Net Metering
            </Link>
          </div>

          <div className="flex flex-col gap-2.5 col-span-2 sm:col-span-1">
            <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
              Contact & Support
            </span>
            <Link to="/contact" className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              Book Site Survey
            </Link>
            <a href={`tel:${brandDetails.phone}`} className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              {brandDetails.phone}
            </a>
            <a href={`mailto:${brandDetails.email}`} className="font-body-sm text-sm text-[#e2eae4] hover:text-white transition-colors">
              {brandDetails.email}
            </a>
            <span className="font-body-sm text-xs text-[#7ca793]">
              Mon - Sat: 9:00 AM - 7:00 PM IST
            </span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#123c2d]/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[#e2eae4]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#8af9b3]">
              pin_drop
            </span>
            <span className="font-label-ui text-sm">
              {brandDetails.cities.join(' • ')}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8af9b3]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8af9b3] animate-pulse"></span>
            <span>MNRE Channel Partner Certified</span>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#a4d0bb]">
          <p>
            © 2025 SuryaVeda Clean Energy Technologies Pvt. Ltd. Certified MNRE Channel Partner. All equipment backed by 25-year performance warranties.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/faqs" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faqs" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
