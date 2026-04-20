import type { Product } from '../types'
import { useCartStore } from '../store/cartStore'

interface Props {
  product: Product
}

export function ProductCard({ product }: Props) {
  const { items, setQty } = useCartStore()
  const item = items.find((i) => i.productId === product.id)
  const qty = item?.qty ?? 0

  const badgeClass =
    product.badgeColor === 'brown'
      ? 'bg-[#4a3728] text-[#f5f0e8]'
      : 'bg-[#4a6e3a] text-white'

  return (
    <div className="bg-white/75 backdrop-blur-sm rounded-2xl border border-[#d4c9b0] p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      {product.image && (
        <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover mr-4 flex-shrink-0 border border-[#e8dfd0]" />
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[#3a2a1a] font-semibold text-base">{product.name}</span>
          {product.badge && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeClass}`}>
              {product.badge}
            </span>
          )}
        </div>
        <p className="text-[#9a8878] text-sm">{product.description}</p>
        <p className="text-[#4a3728] font-bold mt-1">
          ${product.price.toLocaleString('es-AR')}
        </p>
      </div>

      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={() => setQty(product.id, qty - 1)}
          className="w-8 h-8 rounded-full border border-[#d4c9b0] text-[#8a7560] flex items-center justify-center hover:bg-[#f5ede0] hover:border-[#8a6e4b] transition-colors text-lg leading-none"
          aria-label="Restar"
        >
          −
        </button>
        <span className="w-5 text-center text-[#3a2a1a] font-semibold">{qty}</span>
        <button
          onClick={() => setQty(product.id, qty + 1)}
          className="w-8 h-8 rounded-full bg-[#4a3728] text-[#f5f0e8] flex items-center justify-center hover:bg-[#3a2a1a] transition-colors text-lg leading-none"
          aria-label="Sumar"
        >
          +
        </button>
      </div>
    </div>
  )
}
