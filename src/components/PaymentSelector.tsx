import type { PaymentMethod } from '../types'
import { useCartStore } from '../store/cartStore'

const METHODS: PaymentMethod[] = ['Efectivo', 'Transferencia']

export function PaymentSelector() {
  const { paymentMethod, submitted, setPaymentMethod } = useCartStore()

  const paymentError = submitted && paymentMethod === null

  return (
    <div>
      <p className="text-sm text-[#6b5040] mb-2 font-semibold">
        Método de pago <span className="text-[#c0392b]">*</span>
      </p>
      <div className="flex gap-2 flex-wrap">
        {METHODS.map((method) => (
          <button
            key={method}
            onClick={() => setPaymentMethod(method)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all ${
              paymentMethod === method
                ? 'bg-[#4a3728] text-[#f5f0e8] border-[#4a3728] shadow-sm'
                : paymentError
                ? 'bg-white/60 text-[#8a7560] border-[#c0392b] hover:border-[#8a6e4b] hover:text-[#4a3728]'
                : 'bg-white/60 text-[#8a7560] border-[#d4c9b0] hover:border-[#8a6e4b] hover:text-[#4a3728]'
            }`}
          >
            {method}
          </button>
        ))}
      </div>
      {paymentMethod === 'Transferencia' && (
        <div className="mt-2 flex items-center gap-2 bg-[#f5f0e8] rounded-xl px-3 py-2.5 border border-[#d4c9b0]">
          <span className="text-base">🏦</span>
          <p className="text-xs text-[#6b5040]">
            Alias <span className="font-semibold">sinculpa.tandil</span> a nombre de Candela Lopez Mezzas
          </p>
        </div>
      )}
      {paymentError && (
        <p className="mt-1.5 text-xs text-[#c0392b] flex items-center gap-1">
          <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Seleccioná un método de pago
        </p>
      )}
    </div>
  )
}
