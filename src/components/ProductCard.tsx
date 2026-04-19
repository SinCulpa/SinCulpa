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
      ? 'bg-amber-800 text-white'
      : 'bg-green-600 text-white'

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex items-center justify-between shadow-sm">
      {product.image && (
        <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover mr-3 flex-shrink-0" />
      )}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gray-800 font-medium text-base">{product.name}</span>
          {product.badge && (
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${badgeClass}`}>
              {product.badge}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm">{product.description}</p>
        <p className="text-gray-700 font-semibold mt-1">
          ${product.price.toLocaleString('es-AR')}
        </p>
      </div>

      <div className="flex items-center gap-3 ml-4">
        <button
          onClick={() => setQty(product.id, qty - 1)}
          className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors text-lg leading-none"
          aria-label="Restar"
        >
          −
        </button>
        <span className="w-4 text-center text-gray-800 font-medium">{qty}</span>
        <button
          onClick={() => setQty(product.id, qty + 1)}
          className="w-8 h-8 rounded-full border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 transition-colors text-lg leading-none"
          aria-label="Sumar"
        >
          +
        </button>
      </div>
    </div>
  )
}
