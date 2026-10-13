import { Link, useLocation } from 'react-router-dom'
import { navigationLinks, brandDetails } from '../../data/navigationData'

export default function MobileDrawer({ isOpen, onClose }) {
  const location = useLocation()

  return (
    <aside
      className={`fixed inset-0 z-[60] transition-all duration-300 ${
        isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
      }`}
    >
      <div
        className={`absolute inset-0 bg-[#002519]/25 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`absolute right-0 top-0 bottom-0 w-5/6 max-w-sm bg-[#F7F7F2] flex flex-col shadow-2xl pt-safe pb-safe transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 px-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={brandDetails.logoUrl}
              alt="Solar House Rooftop Solutions Logo"
              className="h-7 w-auto object-contain"
            />
            <span className="font-headline-sm text-lg text-[#002519] font-bold">
              Menu
            </span>
          </div>

          <button
            type="button"
            aria-label="Close Menu"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-[#202824] hover:bg-[#edf6ef] rounded-xl transition-colors"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
          {navigationLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-label-ui text-sm transition-colors ${
                  isActive
                    ? 'bg-[#edf6ef] text-[#006d3e] font-bold'
                    : 'text-[#202824] hover:bg-[#edf6ef]/60'
                }`}
              >
                <span className="material-symbols-outlined text-[20px] text-[#006d3e]">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full h-12 bg-[#006d3e] text-white font-label-ui text-sm rounded-xl flex items-center justify-center hover:bg-[#123c2d] transition-colors shadow-sm font-semibold"
          >
            Get Architectural Quote
          </Link>
        </div>
      </div>
    </aside>
  )
}
