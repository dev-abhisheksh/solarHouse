import { useState } from 'react'

export default function FaqAccordion({ faqs }) {
  const [openId, setOpenId] = useState(1)

  function toggleFaq(id) {
    setOpenId((currentId) => (currentId === id ? null : id))
  }

  return (
    <div className="flex flex-col gap-3 max-w-3xl mx-auto">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id

        return (
          <div
            key={faq.id}
            className="rounded-2xl bg-[#edf6ef] overflow-hidden transition-all"
          >
            <button
              type="button"
              onClick={() => toggleFaq(faq.id)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-label-ui text-sm sm:text-base text-[#002519] font-bold hover:bg-[#e2eae4] transition-colors"
            >
              <span>{faq.question}</span>
              <span
                className={`material-symbols-outlined text-[20px] text-[#006d3e] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                expand_more
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-sm font-body-sm text-[#414844] leading-relaxed pt-1">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
