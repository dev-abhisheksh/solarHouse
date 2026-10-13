import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import SolarCalculator from '../components/calculator/SolarCalculator'
import FaqAccordion from '../components/faq/FaqAccordion'
import { faqData } from '../data/faqData'

export default function CalculatorPage() {
  const financialFaqs = faqData.filter(
    (item) => item.category === 'pricing' || item.category === 'net-metering'
  )

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="SAVINGS ESTIMATOR"
        title="See What Solar Could Mean For"
        highlight="Your Electricity Bill."
        description="Our dynamic calculator models regional Indian DISCOM tariffs and tropical solar irradiance to project accurate system sizing and payback timeline."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <SectionHeading
            badge="INTERACTIVE CALCULATION"
            title="Adjust Your Monthly Bill to View Immediate Yields."
            description="Toggle between Residential and Commercial rates to evaluate estimated solar capacity and annual savings."
            alignment="center"
          />

          <SolarCalculator />
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="METHODOLOGY"
            title="How We Calculate Your Solar Investment."
            description="Our numbers are grounded in real Indian DISCOM billing structures and empirical generation data."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e2eae4] text-[#006d3e] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-headline-sm text-lg text-[#002519] font-bold">
                Tariff Slab Offsets
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                Indian DISCOMs charge steep progressive tariffs on higher slabs. By displacing peak units with daytime solar, you eliminate high-tier tariffs first.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e2eae4] text-[#006d3e] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-headline-sm text-lg text-[#002519] font-bold">
                Real Daily Irradiance
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                We calibrate generation to 4.2 to 4.5 peak units (kWh) per 1 kWp installed capacity per sunny day, accounting for seasonal monsoon fluctuations.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#e2eae4] text-[#006d3e] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-headline-sm text-lg text-[#002519] font-bold">
                Net-Metering Credits
              </h3>
              <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                Surplus electricity sent to the grid during working hours is credited 1:1 on your monthly utility bill, offsetting evening power consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="FINANCIAL QUESTIONS"
            title="Questions About Costs & Payback?"
            description="Clear details on system expenses, payback horizons, and subsidies."
            alignment="center"
          />

          <div className="mt-8">
            <FaqAccordion faqs={financialFaqs} />
          </div>
        </div>
      </section>
    </div>
  )
}
