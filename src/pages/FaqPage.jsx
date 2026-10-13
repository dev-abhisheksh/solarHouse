import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import FaqAccordion from '../components/faq/FaqAccordion'
import { faqData } from '../data/faqData'
import { brandDetails } from '../data/navigationData'

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All FAQs' },
    { id: 'net-metering', label: 'Net Metering' },
    { id: 'installation', label: 'Roof Suitability' },
    { id: 'pricing', label: 'Cost & Subsidy' },
    { id: 'technical', label: 'Power Output' },
    { id: 'maintenance', label: 'Maintenance' }
  ]

  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="FREQUENTLY ASKED QUESTIONS"
        title="Clear Answers On"
        highlight="Rooftop Solar."
        description="Everything Indian homeowners and commercial facilities ask about switching to rooftop solar, net-metering credits, and maintenance."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-stretch sm:items-center">
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[20px] text-[#737A75]">
                search
              </span>
              <input
                type="text"
                placeholder="Search questions (e.g. net-metering, subsidy, cost)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-11 pr-4 rounded-2xl bg-[#edf6ef] text-sm text-[#202824] placeholder-[#737A75]/70 focus:outline-none focus:bg-[#e2eae4] transition-colors"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl font-label-ui text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#006d3e] text-white'
                      : 'bg-[#edf6ef] text-[#202824] hover:bg-[#e2eae4]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {filteredFaqs.length > 0 ? (
            <FaqAccordion faqs={filteredFaqs} />
          ) : (
            <div className="p-8 text-center bg-[#edf6ef] rounded-3xl">
              <p className="font-headline-sm text-lg text-[#002519] font-bold">
                No matching questions found
              </p>
              <p className="font-body-sm text-sm text-[#737A75] mt-1">
                Try searching with different terms or select "All FAQs".
              </p>
            </div>
          )}

          <div className="mt-8 rounded-3xl p-8 bg-[#edf6ef] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1 text-center sm:text-left">
              <h3 className="font-headline-sm text-xl text-[#002519] font-bold">
                Have a specific question not covered here?
              </h3>
              <p className="font-body-sm text-sm text-[#737A75]">
                Speak directly with one of our certified solar engineers.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`tel:${brandDetails.phone}`}
                className="h-11 px-5 rounded-xl bg-[#e2eae4] text-[#006d3e] font-label-ui text-xs font-bold flex items-center gap-1.5 hover:bg-[#dce5de] transition-colors"
              >
                <span className="material-symbols-outlined text-[16px]">call</span>
                <span>Call Us</span>
              </a>
              <Link
                to="/contact"
                className="h-11 px-5 rounded-xl bg-[#006d3e] text-white font-label-ui text-xs font-bold flex items-center gap-1.5 hover:bg-[#123c2d] transition-colors"
              >
                <span>Ask Engineer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
