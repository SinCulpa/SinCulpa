import type { Product } from '../types'
import brownieImg from '../assets/brownie.jfif'

export const products: Product[] = [
  {
    id: 'brownie-solo',
    name: 'Brownie solo',
    image: brownieImg,
    description: 'banana · huevo · sin relleno',
    price: 4500,
    badge: undefined,
    badgeColor: undefined,
  },
  {
    id: 'brownie-nueces',
    name: 'Brownie con nueces',
    image: brownieImg,
    description: 'banana · huevo · nueces',
    price: 4500,
    badge: undefined,
    badgeColor: undefined,
  },
  {
    id: 'brownie-chips',
    name: 'Brownie con chips',
    image: brownieImg,
    description: 'banana · huevo · chips de chocolate',
    price: 4500,
    badge: undefined,
    badgeColor: undefined,
  },
  {
    id: 'brownie-nueces-chips',
    name: 'Brownie con nueces y chips',
    image: brownieImg,
    description: 'banana · huevo · nueces · chips de chocolate',
    price: 5000,
    badge: undefined,
    badgeColor: undefined,
  },
  {
    id: 'pack3',
    name: 'Brownie x3 unidades',
    image: brownieImg,
    description: '3 brownies a elección · precio especial',
    price: 12500,
    badge: 'promo',
    badgeColor: 'green',
  },
]
