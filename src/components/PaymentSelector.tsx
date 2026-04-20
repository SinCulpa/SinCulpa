import type { PaymentMethod } from '../types'
import { useCartStore } from '../store/cartStore'

const METHODS: PaymentMethod[] = ['Efectivo', 'Transferencia']

export function PaymentSelector() {
  const { paymentMethod, setPaymentMethod } = useCartStore()

  return (
    <div>
      <p className="text-sm text-[#6b5040] mb-2 font-semibold">Método de pago</p>
      <div className="flex gap-2 flex-wrap">
        {METHODS.map((method) => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              paymentMethod === method
                ? 'bg-[#4a3728] text-[#f5f0e8] border-[#4a3728] shadow-sm'
                : 'bg-white/60 text-[#8a7560] border-[#d4c9b0] hover:border-[#8a6e4b] hover:text-[#4a3728]'
            }`}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  )
}
