import logo from '../assets/logo.jfif'
import { useCartStore } from '../store/cartStore'

export function Navbar() {
  const items = useCartStore((s) => s.items)
  const totalQty = items.reduce((acc, i) => acc + i.qty, 0)

  return (
    <nav className="sticky top-0 z-50 bg-[#f5f0e8]/95 backdrop-blur-sm border-b border-[#d4c9b0] shadow-sm">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Sin Culpa"
            className="h-10 w-10 rounded-full object-cover border-2 border-[#8a6e4b]"
          />
          <div>
            <span className="text-[#4a3728] font-bold text-lg tracking-tight leading-none block">
              Sin Culpa
            </span>
            <span className="text-[#8a7560] text-xs tracking-widest uppercase">
              postres artesanales
            </span>
          </div>
        </div>

        {/* Cart indicator */}
        {totalQty > 0 && (
          <div className="flex items-center gap-2 bg-[#4a3728] text-[#f5f0e8] px-3 py-1.5 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{totalQty}</span>
          </div>
        )}

        {/* Leaf decoration when cart is empty */}
        {totalQty === 0 && (
          <span className="text-[#7a9e6e] text-xl">🌿</span>
        )}
      </div>
    </nav>
  )
}
