export type Grade = 'A' | 'B' | 'C'
export type Category = 'macbook' | 'windows' | 'gaming' | 'student'

export interface Product {
  id: string
  brand: string
  model: string
  cpu: string
  ram: string
  ssd: string
  grade: Grade
  battery: number
  price: number
  originalPrice: number
  badges: string[]
  category: Category
  image: string
  forUser: string
  isNew?: boolean
  isFeatured?: boolean
}

export interface PromoCard {
  id: string
  title: string
  subtitle: string
  fromPrice: number
  discount?: string
  image: string
  accentColor: string
  size: 'large' | 'portrait' | 'square'
}

export const products: Product[] = [
  {
    id: 'mba-m1-2020',
    brand: 'Apple',
    model: 'MacBook Air M1 2020',
    cpu: 'Apple M1 8-core',
    ram: '8GB',
    ssd: '256GB SSD',
    grade: 'A',
    battery: 91,
    price: 2799,
    originalPrice: 4299,
    badges: ['Grade A', 'Warranty 3mo', 'Free Shipping'],
    category: 'macbook',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&q=80',
    forUser: 'Students & Creatives',
    isNew: false,
    isFeatured: true,
  },
  {
    id: 'x1-carbon-gen9',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon Gen 9',
    cpu: 'Intel Core i7-1165G7',
    ram: '16GB',
    ssd: '512GB NVMe',
    grade: 'A',
    battery: 85,
    price: 3199,
    originalPrice: 6499,
    badges: ['Grade A', 'Warranty 3mo', 'Free Shipping'],
    category: 'windows',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600&q=80',
    forUser: 'Professionals & Executives',
    isNew: false,
    isFeatured: true,
  },
  {
    id: 'dell-xps-13',
    brand: 'Dell',
    model: 'XPS 13 9310',
    cpu: 'Intel Core i5-1135G7',
    ram: '16GB',
    ssd: '512GB SSD',
    grade: 'B',
    battery: 78,
    price: 2199,
    originalPrice: 4899,
    badges: ['Grade B', 'Warranty 3mo'],
    category: 'windows',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    forUser: 'Remote Workers',
    isNew: true,
  },
  {
    id: 'rog-zephyrus-g14',
    brand: 'ASUS',
    model: 'ROG Zephyrus G14 2022',
    cpu: 'AMD Ryzen 9 6900HS',
    ram: '32GB',
    ssd: '1TB NVMe',
    grade: 'A',
    battery: 88,
    price: 4499,
    originalPrice: 7999,
    badges: ['Grade A', 'Warranty 3mo', 'Free Shipping'],
    category: 'gaming',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80',
    forUser: 'Gamers & Streamers',
    isFeatured: true,
  },
  {
    id: 'lenovo-ideapad-5',
    brand: 'Lenovo',
    model: 'IdeaPad 5 15ITL05',
    cpu: 'Intel Core i5-1135G7',
    ram: '8GB',
    ssd: '256GB SSD',
    grade: 'B',
    battery: 74,
    price: 1199,
    originalPrice: 2499,
    badges: ['Grade B', 'Free Shipping'],
    category: 'student',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
    forUser: 'Budget-Conscious Students',
    isNew: true,
  },
  {
    id: 'hp-elitebook-840',
    brand: 'HP',
    model: 'EliteBook 840 G8',
    cpu: 'Intel Core i7-1165G7',
    ram: '16GB',
    ssd: '512GB NVMe',
    grade: 'A',
    battery: 82,
    price: 2699,
    originalPrice: 5299,
    badges: ['Grade A', 'Warranty 3mo'],
    category: 'windows',
    image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&q=80',
    forUser: 'WFH Professionals',
    isNew: false,
  },
  {
    id: 'mbp-14-m3',
    brand: 'Apple',
    model: 'MacBook Pro 14" M3 2023',
    cpu: 'Apple M3 Pro 11-core',
    ram: '18GB',
    ssd: '512GB SSD',
    grade: 'A',
    battery: 95,
    price: 6499,
    originalPrice: 9299,
    badges: ['Grade A', 'Warranty 3mo', 'Free Shipping'],
    category: 'macbook',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
    forUser: 'Developers & Designers',
    isFeatured: true,
    isNew: true,
  },
  {
    id: 'acer-swift-3',
    brand: 'Acer',
    model: 'Swift 3 SF314-59',
    cpu: 'Intel Core i5-1135G7',
    ram: '8GB',
    ssd: '512GB SSD',
    grade: 'C',
    battery: 66,
    price: 899,
    originalPrice: 2199,
    badges: ['Grade C', 'Free Shipping'],
    category: 'student',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&q=80',
    forUser: 'First-Time Buyers',
    isNew: false,
  },
]

export const promoCards: PromoCard[] = [
  {
    id: 'back-to-campus',
    title: 'Back to Campus',
    subtitle: 'Grade B laptops that won\'t break your PTPTN',
    fromPrice: 899,
    discount: 'Up to 60% off',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
    accentColor: 'teal',
    size: 'large',
  },
  {
    id: 'wfh-essentials',
    title: 'WFH Essentials',
    subtitle: 'Lightweight, all-day battery',
    fromPrice: 1299,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80',
    accentColor: 'charcoal',
    size: 'portrait',
  },
  {
    id: 'creator-picks',
    title: 'Creator Picks',
    subtitle: 'MacBook & XPS for your next build',
    fromPrice: 2799,
    discount: 'Grade A only',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80',
    accentColor: 'warm',
    size: 'portrait',
  },
  {
    id: 'gaming-deals',
    title: 'Level Up for Less',
    subtitle: 'Certified gaming laptops',
    fromPrice: 3299,
    discount: 'Tested & graded',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80',
    accentColor: 'charcoal',
    size: 'square',
  },
]
