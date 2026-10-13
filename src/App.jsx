import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import MobileDrawer from './components/common/MobileDrawer'
import BottomBar from './components/common/BottomBar'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import CalculatorPage from './pages/CalculatorPage'
import ProjectsPage from './pages/ProjectsPage'
import ProcessPage from './pages/ProcessPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F7F7F2] text-[#202824]">
        <Navbar onOpenMenu={() => setIsMenuOpen(true)} />
        <MobileDrawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

        <main className="flex-1 w-full pt-16 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/faqs" element={<FaqPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <BottomBar />
      </div>
    </BrowserRouter>
  )
}
