import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ScrollVideoSection() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const targetFrameRef = useRef(0)
  const animationFrameIdRef = useRef(null)

  const [loadedCount, setLoadedCount] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [displayFrameIndex, setDisplayFrameIndex] = useState(1)

  const totalFrames = 240

  function formatFrameNumber(index) {
    return String(index).padStart(5, '0')
  }

  function drawFrame(frameIndex) {
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
      setLoadedCount(1)
      drawFrame(0)
    }

    for (let index = 1; index <= totalFrames; index++) {
      const img = new Image()
      img.src = `/frames/${formatFrameNumber(index)}.jpg`
      img.onload = () => {
        loadedImages[index - 1] = img
        setLoadedCount((prev) => prev + 1)
      }
    }
  }, [])

  useEffect(() => {
    function resizeCanvas() {
      const canvas = canvasRef.current
      if (!canvas) return

      const pixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * pixelRatio
      canvas.height = rect.height * pixelRatio

      drawFrame(Math.round(currentFrameRef.current))
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [loadedCount])

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
        drawFrame(frameToRender)
        setDisplayFrameIndex(frameToRender + 1)
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

  let activeChapter = {
    tag: '01 • ARCHITECTURAL HARMONY',
    title: 'Precision Rooftop Integration',
    description: 'Bespoke structural engineering designed to blend with contemporary Indian villa and commercial architecture without surface damage.'
  }

  if (scrollProgress >= 0.25 && scrollProgress < 0.55) {
    activeChapter = {
      tag: '02 • BIFACIAL ABSORPTION',
      title: 'Double-Sided Energy Harvesting',
      description: 'Advanced TOPCon bifacial modules convert direct morning sunshine and ambient reflected light into uninterrupted clean electricity.'
    }
  } else if (scrollProgress >= 0.55 && scrollProgress < 0.8) {
    activeChapter = {
      tag: '03 • CONCEALED ENGINEERING',
      title: 'Zero Cable Clutter & Armored Conduit',
      description: 'Hidden architectural raceways, chemical earthing pits, and weather-sealed junction enclosures withstand high monsoon moisture.'
    }
  } else if (scrollProgress >= 0.8) {
    activeChapter = {
      tag: '04 • GRID INDEPENDENCE',
      title: '25-Year Energy Autonomy',
      description: 'Seamless bi-directional net-metering and real-time generation telemetry deliver immediate reductions in utility billing.'
    }
  }

  return (
    <section ref={containerRef} className="relative w-full h-[280vh] bg-[#002519]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#002519]/90 via-transparent to-[#002519]/70 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002519]/80 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-5 sm:px-8 py-20 flex flex-col justify-between pointer-events-none">
          <div className="flex items-center justify-between gap-3 pt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#8af9b3] animate-pulse" />
              <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
                Cinematic Solar Anatomy
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#e2eae4] font-label-caps">
              <span className="material-symbols-outlined text-[16px] text-[#ffdf97]">
                slow_motion_video
              </span>
              <span>
                Frame {String(displayFrameIndex).padStart(3, '0')} / {totalFrames}
              </span>
            </div>
          </div>

          <div className="max-w-xl flex flex-col gap-3 my-auto transition-all duration-300">
            <div className="inline-flex items-center gap-2 text-[#8af9b3] font-label-caps text-xs uppercase tracking-widest font-bold">
              <span className="material-symbols-outlined text-[18px] text-[#8af9b3]">
                solar_power
              </span>
              <span>{activeChapter.tag}</span>
            </div>

            <h2 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-white font-bold leading-tight tracking-tight drop-shadow-md">
              {activeChapter.title}
            </h2>

            <p className="font-body-md text-sm sm:text-base text-[#e2eae4] leading-relaxed drop-shadow">
              {activeChapter.description}
            </p>

            <div className="flex items-center gap-3 pt-3 pointer-events-auto">
              <Link
                to="/calculator"
                className="h-11 px-5 rounded-xl bg-[#006d3e] text-white font-label-ui text-xs sm:text-sm font-semibold flex items-center gap-2 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)]"
              >
                <span>Calculate Your Yield</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </Link>
              <Link
                to="/process"
                className="h-11 px-5 rounded-xl bg-white/15 backdrop-blur-md text-white font-label-ui text-xs sm:text-sm font-semibold flex items-center hover:bg-white/25 transition-all"
              >
                View Process
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col gap-2 pb-2">
            <div className="flex items-center justify-between text-xs text-[#a4d0bb] font-label-caps">
              <span>Scroll to Scrub Video Sequence</span>
              <span>{Math.round(scrollProgress * 100)}%</span>
            </div>

            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8af9b3] transition-all duration-75"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
