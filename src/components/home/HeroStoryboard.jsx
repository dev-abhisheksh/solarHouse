import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { heroScenes } from '../../data/heroScenesData'

export default function HeroStoryboard() {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % heroScenes.length)
    }, 6500)

    return () => clearInterval(timer)
  }, [])

  function handleNext() {
    setCurrentSceneIndex((prev) => (prev + 1) % heroScenes.length)
  }

  function handlePrev() {
    setCurrentSceneIndex((prev) => (prev - 1 + heroScenes.length) % heroScenes.length)
  }

  const activeScene = heroScenes[currentSceneIndex]

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f3fbf5] via-[#edf6ef] to-[#F7F7F2] text-[#202824]">
      <div className="relative w-full min-h-[560px] sm:min-h-[600px] flex flex-col justify-between p-5 sm:p-10 max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGGcltfOOUzNPjQZ1NKLKtfA6NdRNDJfXlXV8XS0fx2jt_VHIc-pJ8zKAuDSXxXFL7DxgTSquQuhBFjkvuUz-QvgSS9gjhN2eYLbtX8FBC6Pihwki1M6EJx2ZQFrjNC1vIz00q9ATorK_hlg9pYvQ6xUWkEak0O4I8AeZVAtKvedW3JDmTB9k8BChahQu1mLCX_SW0fA7mkIjzSL9T6-3rASqRZKDG9NDMJp_SMEbIDQqHW4ELGeYb"
            alt="Solar House Rooftop Solutions luxury villa with integrated rooftop solar array"
            className="w-full h-full object-cover object-center opacity-25 scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F2] via-[#edf6ef]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#edf6ef]/90 via-[#edf6ef]/60 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#87f6b0]/50 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#006d3e] animate-ping" />
            <span className="font-label-caps text-xs tracking-wider text-[#00522d] uppercase font-bold">
              Solar Telemetry • Active Irradiance 5.8 kWh/m²
            </span>
          </div>
          <div className="text-right">
            <span className="font-label-caps text-xs text-[#006d3e] font-bold tracking-widest uppercase">
              Solar House System
            </span>
          </div>
        </div>

        <div className="relative z-10 my-auto py-10">
          <div className="flex flex-col gap-3 max-w-2xl transition-all duration-500">
            <div className="inline-flex items-center gap-2 text-[#006d3e] font-label-caps text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[16px] text-[#006d3e]">
                {activeScene.icon}
              </span>
              <span>{activeScene.timeTag}</span>
            </div>

            <h1 className="font-headline-lg text-3xl sm:text-5xl lg:text-6xl text-[#002519] leading-tight font-extrabold tracking-tight">
              {activeScene.titleLineOne}{' '}
              <span className="text-[#006d3e]">{activeScene.highlightText}</span>{' '}
              {activeScene.titleLineTwo}
            </h1>

            <p className="font-body-md text-sm sm:text-base text-[#414844] max-w-xl pt-1">
              {activeScene.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                to={activeScene.primaryButtonLink}
                className="h-12 px-6 bg-[#006d3e] text-white rounded-xl font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#123c2d] transition-all shadow-sm active:scale-95 font-semibold"
              >
                <span>{activeScene.primaryButtonText}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                to={activeScene.secondaryButtonLink}
                className="h-12 px-6 bg-[#e2eae4] text-[#002519] rounded-xl font-label-ui text-sm flex items-center justify-center hover:bg-[#dce5de] transition-all font-semibold"
              >
                {activeScene.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-caps text-xs tracking-widest text-[#737A75] uppercase font-semibold">
              Sequence 0{currentSceneIndex + 1} / 0{heroScenes.length}
            </span>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                aria-label="Previous Frame"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-[#e2eae4] flex items-center justify-center text-[#002519] hover:bg-[#dce5de] active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                aria-label="Next Frame"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-[#e2eae4] flex items-center justify-center text-[#002519] hover:bg-[#dce5de] active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 w-full h-1.5 rounded-full overflow-hidden bg-[#e2eae4]">
            {heroScenes.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                aria-label={`Go to scene ${index + 1}`}
                onClick={() => setCurrentSceneIndex(index)}
                className={`h-full transition-all duration-300 rounded-full ${
                  index === currentSceneIndex ? 'bg-[#006d3e]' : 'bg-[#e2eae4]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
