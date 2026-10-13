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
    <section className="relative w-full overflow-hidden bg-[#123c2d] text-white">
      <div className="relative w-full min-h-[580px] sm:min-h-[620px] flex flex-col justify-between p-5 sm:p-10 max-w-7xl mx-auto">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGGcltfOOUzNPjQZ1NKLKtfA6NdRNDJfXlXV8XS0fx2jt_VHIc-pJ8zKAuDSXxXFL7DxgTSquQuhBFjkvuUz-QvgSS9gjhN2eYLbtX8FBC6Pihwki1M6EJx2ZQFrjNC1vIz00q9ATorK_hlg9pYvQ6xUWkEak0O4I8AeZVAtKvedW3JDmTB9k8BChahQu1mLCX_SW0fA7mkIjzSL9T6-3rASqRZKDG9NDMJp_SMEbIDQqHW4ELGeYb"
            alt="SuryaVeda modern luxury villa with integrated rooftop solar array"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#123c2d] via-[#123c2d]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#123c2d]/80 to-transparent" />
        </div>

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#8af9b3] animate-ping" />
            <span className="font-label-caps text-xs tracking-wider text-[#8af9b3] uppercase">
              Surya Telemetry • Active Irradiance 5.8 kWh/m²
            </span>
          </div>
          <div className="text-right">
            <span className="font-label-caps text-xs text-[#ffdf97] font-bold tracking-widest uppercase">
              Solar Vedic System
            </span>
          </div>
        </div>

        <div className="relative z-10 my-auto py-10">
          <div className="flex flex-col gap-3 max-w-2xl transition-all duration-500">
            <div className="inline-flex items-center gap-2 text-[#ffdf97] font-label-caps text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px] text-[#ffdf97]">
                {activeScene.icon}
              </span>
              <span>{activeScene.timeTag}</span>
            </div>

            <h1 className="font-headline-lg text-3xl sm:text-5xl lg:text-6xl text-white leading-tight font-extrabold tracking-tight">
              {activeScene.titleLineOne}{' '}
              <span className="text-[#8af9b3]">{activeScene.highlightText}</span>{' '}
              {activeScene.titleLineTwo}
            </h1>

            <p className="font-body-md text-sm sm:text-base text-[#e2eae4] max-w-xl pt-1">
              {activeScene.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                to={activeScene.primaryButtonLink}
                className="h-12 px-6 bg-[#006d3e] text-white rounded-lg font-label-ui text-sm flex items-center justify-center gap-2 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)] active:scale-95 font-semibold"
              >
                <span>{activeScene.primaryButtonText}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                to={activeScene.secondaryButtonLink}
                className="h-12 px-6 bg-white/10 backdrop-blur-md text-white rounded-lg font-label-ui text-sm flex items-center justify-center hover:bg-white/20 transition-all font-semibold"
              >
                {activeScene.secondaryButtonText}
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-4 pb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="font-label-caps text-xs tracking-widest text-[#e2eae4] uppercase">
              Sequence 0{currentSceneIndex + 1} / 0{heroScenes.length}
            </span>
            <div className="flex gap-2 items-center">
              <button
                type="button"
                aria-label="Previous Frame"
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">
                  chevron_left
                </span>
              </button>
              <button
                type="button"
                aria-label="Next Frame"
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 active:scale-90 transition-all"
              >
                <span className="material-symbols-outlined text-[16px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 w-full h-1.5 rounded-full overflow-hidden bg-white/20">
            {heroScenes.map((scene, index) => (
              <button
                key={scene.id}
                type="button"
                aria-label={`Go to scene ${index + 1}`}
                onClick={() => setCurrentSceneIndex(index)}
                className={`h-full transition-all duration-300 rounded-full ${
                  index === currentSceneIndex ? 'bg-[#8af9b3]' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
