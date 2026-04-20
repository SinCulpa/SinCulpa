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
    </div>
  )
}
