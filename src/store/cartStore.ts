import { create } from 'zustand'
import type { PaymentMethod } from '../types'

interface CartItem {
  productId: string
  qty: number
}

type FlourType = 'integral' | 'avena' | null

interface CartStore {
  items: CartItem[]
  tipPercent: number
  paymentMethod: PaymentMethod | null
  customerName: string
  customerAddress: string
  flourType: FlourType
  setQty: (productId: string, qty: number) => void
  setTip: (percent: number) => void
  setPaymentMethod: (method: PaymentMethod) => void
  setCustomerName: (name: string) => void
  setCustomerAddress: (address: string) => void
  setFlourType: (type: FlourType) => void
  reset: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  tipPercent: 0,
  paymentMethod: null,
  customerName: '',
  customerAddress: '',
  flourType: null,
  setQty: (productId, qty) =>
    set((state) => {
      if (qty <= 0) return { items: state.items.filter((i) => i.productId !== productId) }
      const existing = state.items.find((i) => i.productId === productId)
      if (existing) return { items: state.items.map((i) => i.productId === productId ? { ...i, qty } : i) }
      return { items: [...state.items, { productId, qty }] }
    }),
  setTip: (percent) => set({ tipPercent: percent }),
  setPaymentMethod: (method) => set({ paymentMethod: method }),
  setCustomerName: (name) => set({ customerName: name }),
  setCustomerAddress: (address) => set({ customerAddress: address }),
  setFlourType: (type) => set({ flourType: type }),
  reset: () => set({ items: [], tipPercent: 0, paymentMethod: null, customerName: '', customerAddress: '', flourType: null }),
}))
