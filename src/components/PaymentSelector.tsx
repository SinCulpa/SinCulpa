import type { PaymentMethod } from '../types'
import { useCartStore } from '../store/cartStore'

const METHODS: PaymentMethod[] = ['Efectivo', 'Transferencia']

export function PaymentSelector() {
  const { paymentMethod, setPaymentMethod } = useCartStore()

  return (
    <div>
      <p className="text-sm text-gray-500 mb-2 font-medium">Método de pago</p>
      <div className="flex gap-2 flex-wrap">
        {METHODS.map((method) => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method)}
            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-colors ${
              paymentMethod === method
                ? 'bg-amber-800 text-white border-amber-800'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-800 hover:text-amber-800'
            }`}
          >
            {method}
          </button>
        ))}
      </div>
    </div>
  )
}
