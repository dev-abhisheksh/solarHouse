import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ScrollVideoSection() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const targetFrameRef = useRef(0)
  const animationFrameIdRef = useRef(null)

  const [scrollProgress, setScrollProgress] = useState(0)

  const totalFrames = 240

  function formatFrameNumber(index) {
    return String(index).padStart(5, '0')
  }

  function renderFrame(frameIndex) {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const image = imagesRef.current[frameIndex]
    if (!image || !image.complete) return

    const canvasWidth = canvas.width
    const canvasHeight = canvas.height
    const imageWidth = image.naturalWidth || 1280
    const imageHeight = image.naturalHeight || 720

    const scale = Math.max(canvasWidth / imageWidth, canvasHeight / imageHeight)
    const drawWidth = imageWidth * scale
    const drawHeight = imageHeight * scale
    const offsetX = (canvasWidth - drawWidth) / 2
    const offsetY = (canvasHeight - drawHeight) / 2

    context.clearRect(0, 0, canvasWidth, canvasHeight)
    context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight)
  }

  useEffect(() => {
    const loadedImages = new Array(totalFrames)
    imagesRef.current = loadedImages

    const firstImage = new Image()
    firstImage.src = `/frames/${formatFrameNumber(1)}.jpg`
    firstImage.onload = () => {
      loadedImages[0] = firstImage
      renderFrame(0)
    }

    for (let index = 1; index <= totalFrames; index++) {
      const img = new Image()
      img.src = `/frames/${formatFrameNumber(index)}.jpg`
      img.onload = () => {
        loadedImages[index - 1] = img
      }
    }
  }, [])

  useEffect(() => {
    function resizeCanvas() {
      const canvas = canvasRef.current
      if (!canvas) return

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * pixelRatio
      canvas.height = rect.height * pixelRatio

      renderFrame(Math.round(currentFrameRef.current))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  useEffect(() => {
    function handleScroll() {
      const container = containerRef.current
      if (!container) return

      const rect = container.getBoundingClientRect()
      const totalScrollableDistance = rect.height - window.innerHeight

      if (totalScrollableDistance <= 0) return

      const currentScrollTop = -rect.top
      const rawProgress = currentScrollTop / totalScrollableDistance
      const clampedProgress = Math.max(0, Math.min(1, rawProgress))

      setScrollProgress(clampedProgress)

      const target = Math.round(clampedProgress * (totalFrames - 1))
      targetFrameRef.current = target
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function animateFrame() {
      const current = currentFrameRef.current
      const target = targetFrameRef.current
      const difference = target - current

      if (Math.abs(difference) > 0.05) {
        currentFrameRef.current = current + difference * 0.15
        const frameToRender = Math.round(currentFrameRef.current)
        renderFrame(frameToRender)
      }

      animationFrameIdRef.current = requestAnimationFrame(animateFrame)
    }

    animationFrameIdRef.current = requestAnimationFrame(animateFrame)

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [])

  function jumpToProgress(targetProgress) {
    const container = containerRef.current
    if (!container) return

    const containerTop = window.scrollY + container.getBoundingClientRect().top
    const totalDistance = container.offsetHeight - window.innerHeight
    const targetScrollY = containerTop + targetProgress * totalDistance

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    })
  }

  let activeChapter = {
    tag: '01 • ARCHITECTURAL HARMONY',
    title: 'Precision Rooftop Integration',
    description: 'Bespoke structural engineering designed to blend with contemporary Indian villa and commercial architecture without surface damage.',
    highlight: 'Zero roof puncture with load-balanced elevated pergolas'
  }

  if (scrollProgress >= 0.25 && scrollProgress < 0.55) {
    activeChapter = {
      tag: '02 • BIFACIAL ABSORPTION',
      title: 'Double-Sided Energy Harvesting',
      description: 'Advanced TOPCon bifacial modules convert direct morning sunshine and ambient reflected light into uninterrupted clean electricity.',
      highlight: 'Up to 25% higher diurnal generation via ground albedo reflection'
    }
  } else if (scrollProgress >= 0.55 && scrollProgress < 0.8) {
    activeChapter = {
      tag: '03 • CONCEALED ENGINEERING',
      title: 'Zero Cable Clutter & Armored Conduit',
      description: 'Hidden architectural raceways, chemical earthing pits, and weather-sealed junction enclosures withstand high monsoon moisture.',
      highlight: 'IP67 weather armor and hidden structural wire routing'
    }
  } else if (scrollProgress >= 0.8) {
    activeChapter = {
      tag: '04 • GRID INDEPENDENCE',
      title: '25-Year Energy Autonomy',
      description: 'Seamless bi-directional net-metering and real-time generation telemetry deliver immediate reductions in utility billing.',
      highlight: 'Full DISCOM liaison clearance with 25-year warranty protection'
    }
  }

  return (
    <section ref={containerRef} className="relative w-full h-[220vh] sm:h-[260vh] bg-[#002519]">
      <div className="sticky top-0 min-h-screen w-full overflow-hidden flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:py-0">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-3 sm:gap-5">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#8af9b3] animate-ping" />
              <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
                Cinematic Solar Video
              </span>
            </div>

            <span className="font-label-caps text-xs text-[#ffdf97] uppercase tracking-wider font-semibold">
              Scroll To Scrub
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
            <div className="lg:col-span-5 xl:col-span-4 order-2 lg:order-1 self-center">
              <div className="w-full h-auto rounded-2xl bg-[#123c2d]/90 border border-white/15 shadow-xl p-5 sm:p-6 flex flex-col gap-4 backdrop-blur-md text-white transition-all duration-300 ease-in-out">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2 text-[#8af9b3] font-label-caps text-xs uppercase tracking-widest font-bold">
                    <span className="material-symbols-outlined text-[18px]">
                      solar_power
                    </span>
                    <span>{activeChapter.tag}</span>
                  </div>

                  <h2 className="font-headline-lg text-xl sm:text-2xl text-white font-bold leading-tight tracking-tight">
                    {activeChapter.title}
                  </h2>

                  <p className="font-body-sm text-xs sm:text-sm text-[#e2eae4] leading-relaxed">
                    {activeChapter.description}
                  </p>

                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 mt-1">
                    <span className="material-symbols-outlined text-[16px] text-[#ffdf97] shrink-0">
                      verified
                    </span>
                    <span className="font-body-sm text-xs text-[#ffdf97] font-medium leading-tight">
                      {activeChapter.highlight}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => jumpToProgress(0.05)}
                      className={`p-2 rounded-xl text-left border text-xs font-label-ui transition-all ${
                        scrollProgress < 0.25
                          ? 'bg-[#006d3e] border-[#8af9b3] text-white font-bold shadow-sm'
                          : 'bg-white/5 border-white/10 text-[#e2eae4] hover:bg-white/10'
                      }`}
                    >
                      01. Harmony
                    </button>
                    <button
                      type="button"
                      onClick={() => jumpToProgress(0.35)}
                      className={`p-2 rounded-xl text-left border text-xs font-label-ui transition-all ${
                        scrollProgress >= 0.25 && scrollProgress < 0.55
                          ? 'bg-[#006d3e] border-[#8af9b3] text-white font-bold shadow-sm'
                          : 'bg-white/5 border-white/10 text-[#e2eae4] hover:bg-white/10'
                      }`}
                    >
                      02. Bifacial
                    </button>
                    <button
                      type="button"
                      onClick={() => jumpToProgress(0.65)}
                      className={`p-2 rounded-xl text-left border text-xs font-label-ui transition-all ${
                        scrollProgress >= 0.55 && scrollProgress < 0.8
                          ? 'bg-[#006d3e] border-[#8af9b3] text-white font-bold shadow-sm'
                          : 'bg-white/5 border-white/10 text-[#e2eae4] hover:bg-white/10'
                      }`}
                    >
                      03. Concealed
                    </button>
                    <button
                      type="button"
                      onClick={() => jumpToProgress(0.95)}
                      className={`p-2 rounded-xl text-left border text-xs font-label-ui transition-all ${
                        scrollProgress >= 0.8
                          ? 'bg-[#006d3e] border-[#8af9b3] text-white font-bold shadow-sm'
                          : 'bg-white/5 border-white/10 text-[#e2eae4] hover:bg-white/10'
                      }`}
                    >
                      04. Sovereignty
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1 border-t border-white/10">
                  <Link
                    to="/calculator"
                    className="flex-1 h-10 px-4 rounded-xl bg-[#006d3e] text-white font-label-ui text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)]"
                  >
                    <span>Calculate Savings</span>
                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </Link>
                  <Link
                    to="/process"
                    className="h-10 px-4 rounded-xl bg-white/10 backdrop-blur-md text-white font-label-ui text-xs font-semibold flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    Process
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 xl:col-span-8 order-1 lg:order-2">
              <div className="w-full max-w-4xl mx-auto rounded-2xl bg-[#00170f] border border-white/15 shadow-2xl p-3 sm:p-5 flex flex-col gap-3 backdrop-blur-md">
                <div className="flex items-center justify-between px-2 pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8af9b3] animate-pulse" />
                    <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
                      Solar Anatomy
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#ffdf97] font-label-caps uppercase font-semibold">
                    <span className="material-symbols-outlined text-[16px]">
                      touch_app
                    </span>
                    <span>Interactive Scrub</span>
                  </div>
                </div>

                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-2xl">
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
