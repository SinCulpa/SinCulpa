import { useCartStore } from '../store/cartStore'

function FieldError({ message }: { message: string }) {
  return (
    <p className="mt-1.5 text-xs text-[#c0392b] flex items-center gap-1">
      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      {message}
    </p>
  )
}

export function CustomerInfo() {
  const { customerName, customerAddress, flourType, submitted, setCustomerName, setCustomerAddress, setFlourType } = useCartStore()

  const nameError = submitted && !customerName.trim()

  return (
    <div className="space-y-3">
      {/* Tipo de base */}
      <div>
        <label className="text-sm text-[#6b5040] font-semibold block mb-1.5">
          Tipo de base <span className="text-[#9a8878] font-normal">(opcional)</span>
        </label>
        <div className="flex gap-3">
          {(['integral', 'avena'] as const).map((tipo) => (
            <button
              key={tipo}
              onClick={() => setFlourType(flourType === tipo ? null : tipo)}
              className={`flex-1 py-2 rounded-xl border text-sm font-medium transition-all capitalize ${
                flourType === tipo
                  ? 'bg-[#4a3728] text-[#f5f0e8] border-[#4a3728]'
                  : 'bg-white/60 text-[#6b5040] border-[#d4c9b0] hover:border-[#8a6e4b]'
              }`}
            >
              {tipo === 'integral' ? 'Harina integral' : 'Avena'}
            </button>
          ))}
        </div>
      </div>

      {/* Nombre */}
      <div>
        <label className="text-sm text-[#6b5040] font-semibold block mb-1.5">
          Tu nombre <span className="text-[#c0392b]">*</span>
        </label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Ej: María García"
          className={`w-full px-4 py-2.5 rounded-xl border bg-white/60 text-[#3a2a1a] placeholder-[#c0b09a] text-sm focus:outline-none focus:ring-2 transition-all ${
            nameError
              ? 'border-[#c0392b] focus:border-[#c0392b] focus:ring-[#c0392b]/20'
              : 'border-[#d4c9b0] focus:border-[#8a6e4b] focus:ring-[#8a6e4b]/20'
          }`}
        />
        {nameError && <FieldError message="Ingresá tu nombre para continuar" />}
      </div>

      {/* Dirección / Observaciones */}
      <div>
        <label className="text-sm text-[#6b5040] font-semibold block mb-1.5">
          Dirección y observaciones{' '}
          <span className="text-[#9a8878] font-normal">(opcional)</span>
        </label>
        <textarea
          rows={3}
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          placeholder="Ej: Rivadavia 1234, piso 2 · Promo x3: 2 con nueces y 1 con chips"
          className="w-full px-4 py-2.5 rounded-xl border border-[#d4c9b0] bg-white/60 text-[#3a2a1a] placeholder-[#c0b09a] text-sm focus:outline-none focus:border-[#8a6e4b] focus:ring-2 focus:ring-[#8a6e4b]/20 transition-all resize-none"
        />
      </div>

      {/* Shipping info */}
      <div className="flex items-start gap-2 bg-[#f5f0e8] rounded-xl px-3 py-2.5 border border-[#d4c9b0]">
        <span className="text-base mt-0.5">🛵</span>
        <div className="text-xs text-[#6b5040] leading-relaxed">
          <p className="font-semibold">Envío gratis dentro de las cuatro avenidas</p>
          <p className="text-[#9a8878]">Envíos con mandadero · Retiro a domicilio</p>
        </div>
      </div>
    </div>
  )
}
