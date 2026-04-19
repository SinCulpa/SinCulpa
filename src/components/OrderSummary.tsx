import { useCartStore } from '../store/cartStore'
import { products } from '../data/products'

export function OrderSummary() {
  const { items, tipPercent, paymentMethod, reset } = useCartStore()

  const subtotal = items.reduce((acc, item) => {
    const product = products.find((p) => p.id === item.productId)
    return acc + (product?.price ?? 0) * item.qty
  }, 0)

  const tipAmount = Math.round(subtotal * (tipPercent / 100))
  const total = subtotal + tipAmount

  const canSend = items.length > 0 && paymentMethod !== null

  const handleSend = () => {
    const lines = items.map((item) => {
      const product = products.find((p) => p.id === item.productId)
      return `• ${product?.name} x${item.qty} — $${((product?.price ?? 0) * item.qty).toLocaleString('es-AR')}`
    })

    const tipLine = tipPercent > 0 ? `\nPropina (${tipPercent}%): $${tipAmount.toLocaleString('es-AR')}` : ''
    const message = [
      'Hola! Quiero hacer el siguiente pedido:',
      '',
      ...lines,
      '',
      `Subtotal: $${subtotal.toLocaleString('es-AR')}${tipLine}`,
      `*Total: $${total.toLocaleString('es-AR')}*`,
      '',
      `Pago: ${paymentMethod}`,
    ].join('\n')

    const url = `https://wa.me/5492494377085?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    reset()
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3">
      <div className="flex justify-between text-sm text-gray-500">
        <span>Subtotal</span>
        <span>${subtotal.toLocaleString('es-AR')}</span>
      </div>

      {tipPercent > 0 && (
        <div className="flex justify-between text-sm text-gray-500">
          <span>Propina ({tipPercent}%)</span>
          <span>${tipAmount.toLocaleString('es-AR')}</span>
        </div>
      )}

      <div className="flex justify-between text-base font-semibold text-gray-800 border-t border-gray-100 pt-3">
        <span>Total</span>
        <span>${total.toLocaleString('es-AR')}</span>
      </div>

      <button
        onClick={handleSend}
        disabled={!canSend}
        className={`w-full py-3 rounded-xl text-sm font-semibold transition-colors ${
          canSend
            ? 'bg-amber-800 text-white hover:bg-amber-900'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
        }`}
      >
        Enviar pedido por WhatsApp
      </button>
    </div>
  )
}
