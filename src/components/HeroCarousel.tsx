import { useState, useEffect, useCallback } from 'react'
import snack2Img from '../assets/snack2.jfif'
import brownie3Img from '../assets/brownie3.jfif'
import brownie4Img from '../assets/brownie4.jpg'

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1461009312844-e80697a81cc7?auto=format&fit=crop&w=800&q=80',
    tag: '🍫 Receta artesanal',
    title: 'Postres que\nte hacen bien',
    sub: 'Sin harinas refinadas · Sin azúcares procesados',
  },
  {
    image: 'https://images.unsplash.com/photo-1566855833528-35bcc17ae9ce?auto=format&fit=crop&w=800&q=80',
    tag: '✨ Hecho a mano',
    title: 'Brownies fit\nhecho a mano',
    sub: 'Banana · Nueces · Amor',
  },
  {
    image: 'https://images.unsplash.com/photo-1732105094945-a22182f23169?auto=format&fit=crop&w=800&q=80',
    tag: '🎁 Para regalar',
    title: 'Pack x3\na precio especial',
    sub: 'Ideal para regalar o darte un gusto',
  },
  {
    image: snack2Img,
    tag: '⚡ Snack energético',
    title: 'Snack\nenergético',
    sub: 'La opción ideal para recargar energías',
  },
  {
    image: brownie3Img,
    tag: '🍫 Brownie artesanal',
    title: 'Brownie\nartesanal',
    sub: 'Sin harinas refinadas · Sin azúcares procesados',
  },
  {
    image: brownie4Img,
    tag: '🍫 Brownie artesanal',
    title: 'Brownie\nartesanal',
    sub: 'Sin harinas refinadas · Sin azúcares procesados',
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
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ height: '440px' }}>
      {/* Image */}
      <img
        src={slide.image}
        alt="Sin Culpa"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        style={{ opacity: animating ? 0 : 1 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: animating ? 0 : 1,
          background: 'linear-gradient(to top, rgba(20,10,5,0.82) 0%, rgba(20,10,5,0.40) 45%, rgba(20,10,5,0.05) 100%)',
        }}
      />

      {/* Text content */}
      <div
        className="absolute inset-0 flex flex-col justify-end px-6 pt-6 pb-12 transition-all duration-500"
        style={{ opacity: animating ? 0 : 1, transform: animating ? 'translateY(8px)' : 'translateY(0)' }}
      >
        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full mb-3 w-fit border border-white/30">
          {slide.tag}
        </span>
        <h2
          className="text-white font-bold text-3xl leading-tight mb-2"
          style={{ whiteSpace: 'pre-line', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          {slide.title}
        </h2>
        <p className="text-white/80 text-sm mb-5">{slide.sub}</p>
        <button
          onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 bg-white text-[#4a3728] font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-[#f5f0e8] active:scale-95 transition-all duration-150 shadow-md w-fit"
        >
          Ver productos
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
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
