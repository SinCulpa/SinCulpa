import { useCartStore } from '../store/cartStore'

const TIP_OPTIONS = [0, 10, 15, 20]

export function TipSelector() {
  const { tipPercent, setTip } = useCartStore()

  return (
    <div>
      <p className="text-sm text-gray-500 mb-2 font-medium">Propina</p>
      <div className="flex gap-2">
        {TIP_OPTIONS.map((pct) => (
          <button
            key={pct}
            onClick={() => setTip(pct)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium border transition-colors ${
              tipPercent === pct
                ? 'bg-amber-800 text-white border-amber-800'
                : 'bg-white text-gray-600 border-gray-200 hover:border-amber-800 hover:text-amber-800'
            }`}
          >
            {pct}%
          </button>
        ))}
      </div>
    </div>
  )
}
