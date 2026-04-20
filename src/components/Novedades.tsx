export function Novedades() {
  return (
    <section>
      <h2 className="text-xs font-semibold text-[#8a7560] uppercase tracking-widest mb-3 pl-1">
        Novedades
      </h2>

      <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4c9b0] overflow-hidden shadow-sm">
        {/* Banner "próximamente" */}
        <div className="bg-gradient-to-r from-[#4a3728] to-[#6b5040] px-5 py-4 flex items-center gap-3">
          <span className="text-2xl">✨</span>
          <div>
            <p className="text-[#f5f0e8] font-bold text-sm tracking-wide">Próximamente</p>
            <p className="text-[#c9b99a] text-xs">Nuevos sabores en camino</p>
          </div>
        </div>

        {/* Items */}
        <div className="divide-y divide-[#ede5d8]">
          <div className="flex items-center gap-4 px-5 py-4">
            <div className="w-10 h-10 rounded-full bg-[#f5ede0] flex items-center justify-center text-lg flex-shrink-0">
              🍪
            </div>
            <div>
              <p className="text-[#3a2a1a] font-semibold text-sm">Nuevos sabores de brownie</p>
              <p className="text-[#9a8878] text-xs mt-0.5">Próximamente incorporamos variedades nuevas a la carta</p>
            </div>
            <span className="ml-auto text-xs bg-[#e8dfd0] text-[#8a6e4b] font-medium px-2.5 py-1 rounded-full flex-shrink-0">
              Pronto
            </span>
          </div>

        </div>

        {/* Footer de la card */}
        <div className="bg-[#fdf8f2] px-5 py-3 flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-[#c0392b] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          <p className="text-[#9a8878] text-xs">
            Seguinos en{' '}
            <a
              href="https://www.instagram.com/sinculpa_tandil/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6b5040] font-semibold hover:underline"
            >
              @sinculpa_tandil
            </a>{' '}
            para enterarte primero
          </p>
        </div>
      </div>
    </section>
  )
}
