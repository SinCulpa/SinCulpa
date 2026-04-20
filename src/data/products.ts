import type { Product } from '../types'
import brownieImg from '../assets/brownie.jfif'

export const products: Product[] = [
  {
    id: 'brownie',
    name: 'Brownie',
    image: brownieImg,
    description: 'banana · nueces · huevo',
    price: 3800,
    badge: undefined,
    badgeColor: undefined,
  },
  {
    id: 'pack3',
    name: 'Pack x3',
    image: brownieImg,
    description: '3 brownies · precio especial',
    price: 10500,
    badge: 'promo',
    badgeColor: 'green',
  },
]
