import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function ScrollVideoSection() {
  const containerRef = useRef(null)
  const primaryCanvasRef = useRef(null)
  const secondaryCanvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const targetFrameRef = useRef(0)
  const animationFrameIdRef = useRef(null)

  const [boxPosition, setBoxPosition] = useState('right')
  const [scrollProgress, setScrollProgress] = useState(0)

  const totalFrames = 240

  function formatFrameNumber(index) {
    return String(index).padStart(5, '0')
  }

  function renderToCanvas(canvas, frameIndex) {
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

  function drawAllCanvases(frameIndex) {
    renderToCanvas(primaryCanvasRef.current, frameIndex)
    if (boxPosition === 'both') {
      renderToCanvas(secondaryCanvasRef.current, frameIndex)
    }
  }

  useEffect(() => {
    const loadedImages = new Array(totalFrames)
    imagesRef.current = loadedImages

    const firstImage = new Image()
    firstImage.src = `/frames/${formatFrameNumber(1)}.jpg`
    firstImage.onload = () => {
      loadedImages[0] = firstImage
      drawAllCanvases(0)
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
    function resizeCanvases() {
      const pixelRatio = window.devicePixelRatio || 1

      if (primaryCanvasRef.current) {
        const rect = primaryCanvasRef.current.getBoundingClientRect()
        primaryCanvasRef.current.width = rect.width * pixelRatio
        primaryCanvasRef.current.height = rect.height * pixelRatio
      }

      if (secondaryCanvasRef.current) {
        const rect = secondaryCanvasRef.current.getBoundingClientRect()
        secondaryCanvasRef.current.width = rect.width * pixelRatio
        secondaryCanvasRef.current.height = rect.height * pixelRatio
      }

      drawAllCanvases(Math.round(currentFrameRef.current))
    }

    resizeCanvases()
    window.addEventListener('resize', resizeCanvases)
    return () => window.removeEventListener('resize', resizeCanvases)
  }, [boxPosition])

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
        drawAllCanvases(frameToRender)
      }

      animationFrameIdRef.current = requestAnimationFrame(animateFrame)
    }

    animationFrameIdRef.current = requestAnimationFrame(animateFrame)

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current)
      }
    }
  }, [boxPosition])

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

  const renderVideoBox = (canvasRefInstance) => (
    <div className="w-full rounded-2xl bg-[#00170f] border border-white/15 shadow-2xl p-3 sm:p-4 flex flex-col gap-3 backdrop-blur-md">
      <div className="flex items-center justify-between px-2 pt-1">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8af9b3] animate-pulse" />
          <span className="font-label-caps text-[11px] text-[#8af9b3] uppercase tracking-wider font-bold">
            Solar Anatomy Video
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-[#ffdf97] font-label-caps uppercase">
          <span className="material-symbols-outlined text-[16px]">
            slow_motion_video
          </span>
          <span>Scroll Controlled</span>
        </div>
      </div>

      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10 shadow-inner">
        <canvas
          ref={canvasRefInstance}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-black/20" />
      </div>

      <div className="flex flex-col gap-1.5 px-2 pb-1">
        <div className="flex items-center justify-between text-[11px] text-[#a4d0bb] font-label-caps">
          <span>Scrub Sequence Progress</span>
          <span>{Math.round(scrollProgress * 100)}%</span>
        </div>
        <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#8af9b3] transition-all duration-75"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </div>
  )

  const renderContentBox = () => (
    <div className="w-full rounded-2xl bg-[#123c2d]/90 border border-white/15 shadow-2xl p-6 sm:p-8 flex flex-col justify-between gap-6 backdrop-blur-md text-white">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 text-[#8af9b3] font-label-caps text-xs uppercase tracking-widest font-bold">
          <span className="material-symbols-outlined text-[18px]">
            solar_power
          </span>
          <span>{activeChapter.tag}</span>
        </div>

        <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight tracking-tight">
          {activeChapter.title}
        </h2>

        <p className="font-body-md text-sm sm:text-base text-[#e2eae4] leading-relaxed">
          {activeChapter.description}
        </p>

        <div className="grid grid-cols-2 gap-2.5 pt-3">
          <button
            type="button"
            onClick={() => jumpToProgress(0.05)}
            className={`p-2.5 rounded-xl text-left border text-xs font-label-ui transition-all ${
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
            className={`p-2.5 rounded-xl text-left border text-xs font-label-ui transition-all ${
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
            className={`p-2.5 rounded-xl text-left border text-xs font-label-ui transition-all ${
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
            className={`p-2.5 rounded-xl text-left border text-xs font-label-ui transition-all ${
              scrollProgress >= 0.8
                ? 'bg-[#006d3e] border-[#8af9b3] text-white font-bold shadow-sm'
                : 'bg-white/5 border-white/10 text-[#e2eae4] hover:bg-white/10'
            }`}
          >
            04. Sovereignty
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <Link
          to="/calculator"
          className="h-11 px-5 rounded-xl bg-[#006d3e] text-white font-label-ui text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 hover:bg-[#87f6b0] hover:text-[#007241] transition-all shadow-[0_4px_14px_rgba(54,169,107,0.35)]"
        >
          <span>Calculate Savings</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </Link>
        <Link
          to="/process"
          className="h-11 px-5 rounded-xl bg-white/10 backdrop-blur-md text-white font-label-ui text-xs sm:text-sm font-semibold flex items-center justify-center hover:bg-white/20 transition-all"
        >
          View Process
        </Link>
      </div>
    </div>
  )

  return (
    <section ref={containerRef} className="relative w-full h-[280vh] bg-[#002519]">
      <div className="sticky top-0 min-h-screen w-full overflow-hidden flex flex-col justify-center py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto w-full flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#8af9b3] animate-ping" />
              <span className="font-label-caps text-xs text-[#8af9b3] uppercase tracking-wider font-bold">
                Cinematic Solar Video
              </span>
            </div>

            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <span className="font-label-caps text-[11px] text-[#e2eae4] px-2 uppercase font-semibold hidden sm:inline">
                Layout:
              </span>
              <button
                type="button"
                onClick={() => setBoxPosition('right')}
                className={`px-2.5 py-1 rounded-lg font-label-ui text-xs transition-colors ${
                  boxPosition === 'right'
                    ? 'bg-[#006d3e] text-white font-bold'
                    : 'text-[#e2eae4] hover:bg-white/10'
                }`}
              >
                Right Side
              </button>
              <button
                type="button"
                onClick={() => setBoxPosition('left')}
                className={`px-2.5 py-1 rounded-lg font-label-ui text-xs transition-colors ${
                  boxPosition === 'left'
                    ? 'bg-[#006d3e] text-white font-bold'
                    : 'text-[#e2eae4] hover:bg-white/10'
                }`}
              >
                Left Side
              </button>
              <button
                type="button"
                onClick={() => setBoxPosition('both')}
                className={`px-2.5 py-1 rounded-lg font-label-ui text-xs transition-colors ${
                  boxPosition === 'both'
                    ? 'bg-[#006d3e] text-white font-bold'
                    : 'text-[#e2eae4] hover:bg-white/10'
                }`}
              >
                Both Sides
              </button>
            </div>
          </div>

          {boxPosition === 'both' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              {renderVideoBox(primaryCanvasRef)}
              {renderVideoBox(secondaryCanvasRef)}
            </div>
          ) : boxPosition === 'left' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                {renderVideoBox(primaryCanvasRef)}
              </div>
              <div className="lg:col-span-5">
                {renderContentBox()}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                {renderContentBox()}
              </div>
              <div className="lg:col-span-7">
                {renderVideoBox(primaryCanvasRef)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
