import { Link } from 'react-router-dom'
import HeroStoryboard from '../components/home/HeroStoryboard'
import EnergyOverview from '../components/home/EnergyOverview'
import TrustMetrics from '../components/home/TrustMetrics'
import SolutionCard from '../components/solutions/SolutionCard'
import ProjectCard from '../components/projects/ProjectCard'
import ProcessTimeline from '../components/process/ProcessTimeline'
import FaqAccordion from '../components/faq/FaqAccordion'
import SolarCalculator from '../components/calculator/SolarCalculator'
import ConsultationForm from '../components/contact/ConsultationForm'
import SectionHeading from '../components/common/SectionHeading'
import { solutionsData } from '../data/solutionsData'
import { projectsData } from '../data/projectsData'
import { engineeringStandards } from '../data/processStepsData'
import { faqData } from '../data/faqData'

export default function HomePage() {
  const featuredProjects = projectsData.slice(0, 3)
  const homeFaqs = faqData.slice(0, 6)

  return (
    <div className="flex flex-col w-full">
      <HeroStoryboard />

      <EnergyOverview />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]" id="solutions">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="SOLUTIONS FOR EVERY NEED"
            title="Solar That Works for Your World."
            description="Engineered configurations crafted for villas, corporate facilities, and high-load industrial campuses."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {solutionsData.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#002519] text-white font-label-ui text-sm font-semibold hover:bg-[#123c2d] transition-colors shadow-sm"
            >
              <span>Compare All Solar Solutions</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#002519] text-white relative overflow-hidden" id="engineering">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#006d3e]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-10">
          <SectionHeading
            badge="THE SURYAVEDA DIFFERENCE"
            title="More Than Solar Panels. A Smarter Energy Decision."
            description="Every system is calibrated against proprietary Vedic solar geometry and certified German engineering standards."
            textColor="text-white"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-2xl bg-[#123c2d] border border-white/10">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8lG2B6oKBkQr8yAHOWm_Dr7iHoNTyRItZVBsCvT5KM48Yj7AlpXmmYkh9g6UUEtLcnhwJlBFkqae15fCXrE9g8STWP4oy0Y8sjhpDcd_c1TA0VNLNqcj8k8FvdvWL6LPgJuNoswWuPta_MP-Hf-K6Rnyo0n2po35xfX1vqJlgFgsLOkcZaJT82IqFMmkDU_Rc2Qj8p1xQbcFlshld95AmBkS9IQuAP34pqLEg_MxdksKAn92iH1SP"
                alt="SuryaVeda certified solar commissioning engineer inspecting smart inverter module on rooftop"
                className="w-full h-72 sm:h-80 object-cover object-top"
              />
              <div className="p-5 bg-[#123c2d] flex items-center justify-between border-t border-white/10">
                <div>
                  <span className="font-label-caps text-xs text-[#8af9b3] font-bold tracking-wider uppercase block">
                    Field Verification
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg text-white font-bold">
                    100% Commissioned by In-House Engineers
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#006d3e] flex items-center justify-center text-white shrink-0">
                  <span className="material-symbols-outlined text-[20px]">
                    verified
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {engineeringStandards.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl bg-[#123c2d]/80 backdrop-blur-md border border-white/10 flex flex-col gap-2 hover:border-[#8af9b3]/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#006d3e]/30 text-[#8af9b3] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[22px]">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="font-label-ui text-base text-white font-bold mt-1">
                    {item.title}
                  </h3>
                  <p className="font-body-sm text-sm text-[#e2eae4] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]" id="savings">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="MAKE THE NUMBERS WORK FOR YOU"
            title="See What Solar Could Mean for Your Electricity Bill."
            description="Select your typical monthly bill to view estimated rooftop solar capacity, annual savings, and net-metering payback."
            alignment="center"
          />

          <div className="mt-8">
            <SolarCalculator />
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              badge="POWERING REAL PLACES"
              title="From Rooftops to Real-World Impact."
              description="Explore how bespoke engineering merges seamlessly with residential elegance and industrial operational strength."
            />
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 font-label-ui text-sm text-[#006d3e] font-bold hover:text-[#002519] transition-colors shrink-0"
            >
              <span>View All Projects</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]" id="process">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="THE PROCESS"
            title="Your Journey to Solar, Made Simple."
            description="We handle everything from precision rooftop drone surveying to DISCOM net-metering clearance."
            alignment="center"
          />

          <div className="mt-8">
            <ProcessTimeline />
          </div>
        </div>
      </section>

      <TrustMetrics />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]" id="faqs">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <SectionHeading
              badge="CLEAR ANSWERS"
              title="Frequently Asked Questions"
              description="Everything Indian homeowners and commercial facilities ask about switching to rooftop solar."
            />
            <Link
              to="/faqs"
              className="inline-flex items-center gap-1.5 font-label-ui text-sm text-[#006d3e] font-bold hover:text-[#002519] transition-colors shrink-0"
            >
              <span>All Questions</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <FaqAccordion faqs={homeFaqs} />
        </div>
      </section>

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#edf6ef]" id="contact">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            badge="LET'S TALK SOLAR"
            title="Ready to Make the Most of the Sun?"
            description="Book your free, no-obligation architectural solar survey. Our lead engineering team will review your DISCOM tariffs and terrace layout."
            alignment="center"
          />

          <div className="mt-8">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </div>
  )
}
