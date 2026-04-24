import { useCartStore } from '../store/cartStore'

export function CustomerInfo() {
  const { customerName, customerAddress, setCustomerName, setCustomerAddress } = useCartStore()

  return (
    <div className="space-y-3">
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
          className="w-full px-4 py-2.5 rounded-xl border border-[#d4c9b0] bg-white/60 text-[#3a2a1a] placeholder-[#c0b09a] text-sm focus:outline-none focus:border-[#8a6e4b] focus:ring-2 focus:ring-[#8a6e4b]/20 transition-all"
        />
      </div>

      {/* Dirección */}
      <div>
        <label className="text-sm text-[#6b5040] font-semibold block mb-1.5">
          Dirección de entrega{' '}
          <span className="text-[#9a8878] font-normal">(opcional)</span>
        </label>
        <input
          type="text"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          placeholder="Ej: Rivadavia 1234, piso 2"
          className="w-full px-4 py-2.5 rounded-xl border border-[#d4c9b0] bg-white/60 text-[#3a2a1a] placeholder-[#c0b09a] text-sm focus:outline-none focus:border-[#8a6e4b] focus:ring-2 focus:ring-[#8a6e4b]/20 transition-all"
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
