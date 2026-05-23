import { products } from './data/products'
import { useCartStore } from './store/cartStore'
import { ProductCard } from './components/ProductCard'
import { TipSelector } from './components/TipSelector'
import { PaymentSelector } from './components/PaymentSelector'
import { OrderSummary } from './components/OrderSummary'
import { CustomerInfo } from './components/CustomerInfo'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HeroCarousel } from './components/HeroCarousel'
import { Novedades } from './components/Novedades'

export default function App() {
  const items = useCartStore((s) => s.items)
  const hasItems = items.length > 0

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'linear-gradient(160deg, #fdf8f0 0%, #f5ede0 50%, #eee5d3 100%)' }}>
      <Navbar />

      <main className="flex-1 max-w-xl mx-auto w-full px-4 py-6 space-y-6">

        {/* Hero carousel */}
        <HeroCarousel />

        {/* Products */}
        <section id="productos" style={{ scrollMarginTop: '70px' }}>
          <h2 className="text-xs font-semibold text-[#8a7560] uppercase tracking-widest mb-3 pl-1">
            Nuestros productos
          </h2>
          <div className="space-y-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Checkout */}
        {hasItems && (
          <section id="pedido" className="space-y-4" style={{ scrollMarginTop: '70px' }}>
            <h2 className="text-xs font-semibold text-[#8a7560] uppercase tracking-widest pl-1">
              Tu pedido
            </h2>

            {/* Customer info + options */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-[#d4c9b0] p-4 shadow-sm space-y-4">
              <CustomerInfo />
              <div className="border-t border-[#e8dfd0]" />
              <TipSelector />
              <div className="border-t border-[#e8dfd0]" />
              <PaymentSelector />
            </div>

            <OrderSummary />
          </section>
        )}

        {/* Por qué elegirnos */}
        <section className="bg-white/70 backdrop-blur-sm rounded-2xl border border-[#d4c9b0] p-5 shadow-sm">
          <h2 className="text-[#4a3728] font-bold text-base mb-4">¿Por qué elegir Sin Culpa?</h2>
          <ul className="space-y-3">
            {[
              'Ingredientes más saludables',
              'Sin harinas refinadas ni azúcares procesados',
              'Mucho sabor, sin resignar calidad',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#4a3728] flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#f5f0e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-[#4a3728] text-sm leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Novedades */}
        <Novedades />
      </main>

      <Footer />
    </div>
  )
}
