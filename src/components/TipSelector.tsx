import { useCartStore } from '../store/cartStore'

const TIP_OPTIONS = [0, 10, 15, 20]

export function TipSelector() {
  const { tipPercent, setTip } = useCartStore()

  return (
    <div>
      <p className="text-sm text-[#6b5040] mb-2 font-semibold">Propina</p>
      <div className="flex gap-2">
        {TIP_OPTIONS.map((pct) => (
          <button
            key={pct}
            onClick={() => setTip(pct)}
            className={`flex-1 py-2 rounded-xl text-sm font-semibold border transition-all ${
              tipPercent === pct
                ? 'bg-[#4a3728] text-[#f5f0e8] border-[#4a3728] shadow-sm'
                : 'bg-white/60 text-[#8a7560] border-[#d4c9b0] hover:border-[#8a6e4b] hover:text-[#4a3728]'
            }`}
          >
            {pct}%
          </button>
        ))}
      </div>
    </div>
  )
}
