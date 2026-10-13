export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-[#E2E5DF] flex flex-col hover:shadow-lg transition-shadow">
      <div className="relative w-full h-56 sm:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        {project.tag && (
          <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#002519]/85 backdrop-blur-md text-white font-label-caps text-xs font-bold">
            {project.tag}
          </div>
        )}
      </div>

      <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1 justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-xs text-[#006d3e] font-bold">
              {project.location}
            </span>
            <span className="font-label-caps text-xs text-[#737A75]">
              {project.year}
            </span>
          </div>

          <h3 className="font-headline-sm text-xl text-[#002519] font-bold">
            {project.title}
          </h3>

          <p className="font-body-sm text-sm text-[#737A75]">
            {project.description}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-2 bg-[#edf6ef] p-3 rounded-xl text-center">
          <div>
            <span className="font-label-caps text-[11px] text-[#737A75] block">
              System
            </span>
            <span className="font-label-ui text-sm text-[#002519] font-bold">
              {project.systemSize}
            </span>
          </div>
          <div>
            <span className="font-label-caps text-[11px] text-[#737A75] block">
              Yield/Mo
            </span>
            <span className="font-label-ui text-sm text-[#006d3e] font-bold">
              {project.monthlyYield}
            </span>
          </div>
          <div>
            <span className="font-label-caps text-[11px] text-[#737A75] block">
              Offset
            </span>
            <span className="font-label-ui text-sm text-[#002519] font-bold">
              {project.carbonOffset}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
