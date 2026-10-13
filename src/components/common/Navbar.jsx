import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navigationLinks, brandDetails } from '../../data/navigationData'

export default function Navbar({ onOpenMenu }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 pt-safe ${
        isScrolled
          ? 'bg-[#F7F7F2] shadow-[0_4px_16px_rgba(18,60,45,0.08)]'
          : 'bg-[#F7F7F2]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2.5 min-w-0">
          <img
            src={brandDetails.logoUrl}
            alt="SuryaVeda Brand Logo"
            className="h-8 w-auto object-contain shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-label-caps text-xs tracking-widest text-[#002519] uppercase truncate">
              {brandDetails.name}
            </span>
            <span className="font-label-ui text-xs text-[#737A75] truncate">
              {brandDetails.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-[#006d3e] bg-[#edf6ef]'
                    : 'text-[#202824] hover:text-[#006d3e] hover:bg-[#edf6ef]/60'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Link
            to="/contact"
            className="h-9 px-4 bg-[#006d3e] text-white rounded-lg font-label-ui text-sm flex items-center justify-center hover:bg-[#123c2d] transition-colors shadow-sm"
          >
            Quote
          </Link>

          <Link
            to="/contact"
            aria-label="User Account"
            className="w-8 h-8 rounded-full bg-[#002519] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </Link>

          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={onOpenMenu}
            className="w-10 h-10 flex items-center justify-center text-[#002519] rounded-lg hover:bg-[#e7f0e9] transition-colors lg:hidden"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
