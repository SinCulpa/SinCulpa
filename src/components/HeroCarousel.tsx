import { useState, useEffect, useCallback } from 'react'
import brownieImg from '../assets/brownie.jfif'

const SLIDES = [
  {
    image: brownieImg,
    overlay: 'bg-gradient-to-t from-[#2a1a0e]/80 via-[#2a1a0e]/30 to-transparent',
    tag: '🍫 Receta artesanal',
    title: 'Postres que\nte hacen bien',
    sub: 'Sin harinas refinadas · Sin azúcares procesados',
  },
  {
    image: brownieImg,
    overlay: 'bg-gradient-to-t from-[#1a2e0e]/80 via-[#1a2e0e]/30 to-transparent',
    tag: '🍫 Receta artesanal',
    title: 'Brownies fit\nhecho a mano',
    sub: 'Banana · Nueces · Amor',
  },
  {
    image: brownieImg,
    overlay: 'bg-gradient-to-t from-[#3a2000]/80 via-[#3a2000]/30 to-transparent',
    tag: '✨ Nuevo',
    title: 'Pack x3\na precio especial',
    sub: 'Ideal para regalar o darte un gusto',
  },
]

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 300)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 4500)
    return () => clearInterval(timer)
  }, [next])

  const slide = SLIDES[current]

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg" style={{ height: '320px' }}>
      {/* Image */}
      <img
        src={slide.image}
        alt="Sin Culpa"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: animating ? 0 : 1 }}
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${slide.overlay} transition-opacity duration-500`} style={{ opacity: animating ? 0 : 1 }} />

      {/* Text content */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500"
        style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)' }}
      >
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-3 w-fit border border-white/30">
          {slide.tag}
        </span>
        <h2 className="text-white font-bold text-2xl leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>
          {slide.title}
        </h2>
        <p className="text-white/80 text-sm">{slide.sub}</p>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        aria-label="Anterior"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/50 transition-colors"
        aria-label="Siguiente"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-5 h-2 bg-white'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
