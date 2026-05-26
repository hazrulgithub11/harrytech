import { motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import type { Product } from '@/data/products'

function hasFreeShipping(product: Product) {
  return product.badges.some((b) => /free shipping/i.test(b))
}

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        default: { duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 0.25, ease: 'easeOut' },
      }}
      className="group h-full bg-white rounded-xl sm:rounded-2xl overflow-hidden flex flex-col cursor-pointer shadow-[0_10px_24px_-18px_rgba(27,31,38,0.5)] hover:shadow-[0_20px_42px_-24px_rgba(27,31,38,0.45)] transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-white aspect-[4/3]">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-contain p-3 sm:p-8 group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-2.5 sm:p-4 gap-1.5 sm:gap-2">
        {/* Title block (fixed rhythm for symmetry) */}
        <div className="min-h-[48px] sm:min-h-[64px]">
          <h3 className="font-sans font-semibold text-charcoal text-xs sm:text-sm leading-snug line-clamp-2">
            {product.brand} {product.model}
          </h3>
        </div>

        {/* Small perk line (matches screenshot vibe) */}
        <div className="min-h-[16px] sm:min-h-[18px]">
          {hasFreeShipping(product) && (
            <div className="flex items-center gap-1 text-[11px] sm:text-xs font-sans text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Free Shipping Voucher</span>
            </div>
          )}
        </div>

        {/* Price stack (kept aligned across cards) */}
        <div className="mt-auto pt-1.5 sm:pt-2">
          <div className="text-[11px] sm:text-xs font-sans text-muted-foreground">
            From <span className="font-sans font-semibold text-charcoal">RM {product.price.toLocaleString()}</span>
          </div>
          <div className="text-[10px] sm:text-[11px] font-body text-muted-foreground line-through mt-0.5">
            RM {product.originalPrice.toLocaleString()}
          </div>
        </div>

        {/* CTA row (same position every card) */}
        <div className="pt-1.5 sm:pt-2">
          <button className="w-full flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 bg-charcoal text-white text-[11px] sm:text-xs font-sans font-medium rounded-lg sm:rounded-xl hover:bg-teal transition-colors">
            <ShoppingCart size={13} />
            <span>Add</span>
          </button>
        </div>
      </div>
    </motion.article>
  )
}
