import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import SectionHeading from '../components/common/SectionHeading'
import ProjectCard from '../components/projects/ProjectCard'
import { projectsData } from '../data/projectsData'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential Estates' },
    { id: 'commercial', label: 'Commercial & Campus' },
    { id: 'industrial', label: 'Industrial Plants' }
  ]

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((item) => item.category === activeCategory)

  const flagshipProject = projectsData.find((item) => item.featured) || projectsData[0]

  return (
    <div className="flex flex-col w-full">
      <PageHeader
        badge="MONOLITHIC PROJECTS"
        title="From Rooftops to"
        highlight="Real-World Impact."
        description="Explore how bespoke engineering merges seamlessly with residential elegance and industrial operational strength across South and Western India."
      />

      <section className="w-full px-5 sm:px-8 py-16 sm:py-20 bg-[#F7F7F2]">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="rounded-3xl overflow-hidden bg-white border border-[#E2E5DF] shadow-xl grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto min-h-[320px]">
              <img
                src={flagshipProject.image}
                alt={flagshipProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#002519]/85 backdrop-blur-md text-white font-label-caps text-xs uppercase font-bold tracking-wider">
                {flagshipProject.tag}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="font-label-caps text-xs text-[#006d3e] font-bold">
                    {flagshipProject.location}
                  </span>
                  <span className="font-label-caps text-xs text-[#737A75]">
                    {flagshipProject.year}
                  </span>
                </div>

                <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#002519] font-bold">
                  {flagshipProject.title}
                </h2>

                <p className="font-body-sm text-sm text-[#737A75] leading-relaxed">
                  {flagshipProject.description}
                </p>

                <p className="font-body-sm text-xs text-[#737A75] bg-[#edf6ef] p-3 rounded-xl">
                  {flagshipProject.details}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-[#edf6ef] p-4 rounded-2xl text-center">
                <div>
                  <span className="font-label-caps text-[11px] text-[#737A75] block">
                    Capacity
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg text-[#002519] font-bold">
                    {flagshipProject.systemSize}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[11px] text-[#737A75] block">
                    Monthly Yield
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg text-[#006d3e] font-bold">
                    {flagshipProject.monthlyYield}
                  </span>
                </div>
                <div>
                  <span className="font-label-caps text-[11px] text-[#737A75] block">
                    CO₂ Offset
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg text-[#002519] font-bold">
                    {flagshipProject.carbonOffset}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <SectionHeading
                badge="PORTFOLIO ARCHIVE"
                title="Installed Commissions."
                description="Filtered by building type and architectural requirements."
              />

              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl font-label-ui text-xs sm:text-sm font-semibold transition-all ${
                      activeCategory === cat.id
                        ? 'bg-[#002519] text-white shadow-sm'
                        : 'bg-white text-[#202824] border border-[#E2E5DF] hover:bg-[#edf6ef]'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <div className="rounded-2xl p-8 bg-[#002519] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl mt-6">
            <div className="flex flex-col gap-2 text-center sm:text-left">
              <h3 className="font-headline-sm text-xl sm:text-2xl font-bold text-white">
                Request Our Comprehensive Project Dossier
              </h3>
              <p className="font-body-sm text-sm text-[#e2eae4] max-w-lg">
                Includes structural schematics, electrical line diagrams, and DISCOM generation reports for similar properties in your city.
              </p>
            </div>
            <Link
              to="/contact"
              className="h-12 px-6 bg-[#8af9b3] text-[#002116] rounded-xl font-label-ui text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#c0ecd6] transition-colors shrink-0"
            >
              <span>Request Dossier</span>
              <span className="material-symbols-outlined text-[18px]">
                download
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
