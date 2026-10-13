import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import TrustMetrics from '../components/home/TrustMetrics'
import SectionHeading from '../components/common/SectionHeading'
import { engineeringStandards } from '../data/processStepsData'
import { valueHighlights } from '../data/metricsData'

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="ABOUT SOLAR HOUSE"
        title="Architectural Solar Energy."
        highlight="Rooted in Abundance."
        description="Solar House Rooftop Solutions was founded to unite clean solar energy with German-standard electrical engineering and modernist architecture for residences and enterprises across India."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <SectionHeading
              badge="OUR PHILOSOPHY"
              title="Vedic Solar Geometry Meets Precision Engineering."
              description="In ancient Indian thought, Surya represents perpetual energy, clarity, and life sustenance. We translate this heritage into architectural rooftop solar systems that generate clean power while elevating building aesthetics."
            />

            <div className="flex flex-col gap-4 text-sm font-body-md text-[#737A75] leading-relaxed">
              <p>
                Traditional rooftop solar often forces homeowners and facility managers to accept unsightly industrial framing, chaotic cable runs, and cluttered terraces. Solar House Rooftop Solutions was created to challenge that convention.
              </p>
              <p>
                Every installation is treated as an architectural commission. From flush black-frame integrations to elevated habitable terrace pergolas, our designs preserve lifestyle spaces, rooftop gardens, and corporate identities without structural compromise.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#edf6ef]">
                <span className="font-headline-sm text-2xl font-bold text-[#006d3e] block">100%</span>
                <span className="font-label-ui text-xs text-[#202824] font-medium">In-House Engineering Team</span>
              </div>
              <div className="p-4 rounded-2xl bg-[#edf6ef]">
                <span className="font-headline-sm text-2xl font-bold text-[#006d3e] block">MNRE</span>
                <span className="font-label-ui text-xs text-[#202824] font-medium">Certified Channel Partner</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 rounded-3xl overflow-hidden bg-[#e2eae4]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGGcltfOOUzNPjQZ1NKLKtfA6NdRNDJfXlXV8XS0fx2jt_VHIc-pJ8zKAuDSXxXFL7DxgTSquQuhBFjkvuUz-QvgSS9gjhN2eYLbtX8FBC6Pihwki1M6EJx2ZQFrjNC1vIz00q9ATorK_hlg9pYvQ6xUWkEak0O4I8AeZVAtKvedW3JDmTB9k8BChahQu1mLCX_SW0fA7mkIjzSL9T6-3rASqRZKDG9NDMJp_SMEbIDQqHW4ELGeYb"
              alt="Solar House Rooftop Solutions architectural rooftop integration"
              className="w-full h-80 sm:h-96 object-cover"
            />
            <div className="p-6 bg-[#edf6ef] text-[#002519]">
              <span className="font-label-caps text-xs text-[#006d3e] uppercase font-bold tracking-wider">
                Our Guarantee
              </span>
              <p className="font-headline-sm text-lg text-[#002519] font-bold mt-1">
                Zero architectural clutter, verified generation ratio SLAs, and 25-year performance warranty.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="ENGINEERING INTEGRITY"
            title="The Pillars of Solar House Reliability."
            description="Our four foundational commitments to quality, safety, and transparent execution."
            alignment="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {engineeringStandards.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-3xl bg-[#f3fbf5] flex flex-col gap-3"
              >
                <div className="w-12 h-12 rounded-xl bg-[#e2eae4] text-[#006d3e] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg text-[#002519] font-bold mt-1">
                  {item.title}
                </h3>
                <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="VALUE PROPOSITION"
            title="Why Modern India Chooses Solar House."
            description="Proven advantages delivering sustained fiscal and ecological returns."
            alignment="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {valueHighlights.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-3xl bg-[#edf6ef] flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#e2eae4] text-[#006d3e] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-full font-label-caps text-xs ${item.badgeBg}`}>
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg text-[#002519] font-bold">
                  {item.title}
                </h3>
                <p className="font-body-sm text-sm text-[#737A75]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustMetrics />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef] text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
          <span className="font-label-caps text-xs text-[#006d3e] uppercase font-bold tracking-widest">
            JOIN THE SOLAR MOVEMENT
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl text-[#002519] font-bold">
            Ready to Partner With Solar House?
          </h2>
          <p className="font-body-md text-base text-[#737A75]">
            Our engineering team is ready to inspect your terrace, calculate solar azimuth models, and provide a tailored proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/contact"
              className="h-12 px-8 bg-[#006d3e] text-white rounded-xl font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-colors font-semibold"
            >
              <span>Book Physical Site Survey</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
            <Link
              to="/solutions"
              className="h-12 px-8 bg-[#e7f0e9] text-[#002519] rounded-xl font-label-ui text-sm flex items-center justify-center hover:bg-[#e2eae4] transition-colors font-semibold"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
