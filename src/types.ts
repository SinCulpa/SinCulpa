export interface Product {
  id: string
  name: string
  description: string
  price: number
  image?: string
  badge?: string
  badgeColor?: 'brown' | 'green'
}

export type PaymentMethod = 'Efectivo' | 'Transferencia'
