import logo from './assets/logo.jfif'
import { products } from './data/products'
import { useCartStore } from './store/cartStore'
import { ProductCard } from './components/ProductCard'
import { TipSelector } from './components/TipSelector'
import { PaymentSelector } from './components/PaymentSelector'
import { OrderSummary } from './components/OrderSummary'

export default function App() {
  const items = useCartStore((s) => s.items)
  const hasItems = items.length > 0

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <header className="text-center">
          <img src={logo} alt="Sin Culpa" className="mx-auto h-24 w-auto object-contain mb-2" />
          <p className="text-sm text-gray-400 tracking-widest uppercase">
            postres artesanales
          </p>
        </header>

        {/* Products */}
        <section className="space-y-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>

        {/* Checkout */}
        {hasItems && (
          <section className="space-y-4">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-4">
              <TipSelector />
              <PaymentSelector />
            </div>
            <OrderSummary />
          </section>
        )}
      </div>
    </div>
  )
}
