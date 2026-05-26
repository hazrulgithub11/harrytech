import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Zap, ShieldCheck } from 'lucide-react'
import type { Product, Grade } from '@/data/products'

const gradeConfig: Record<Grade, { label: string; bg: string; text: string; dot: string }> = {
  A: {
    label: 'Grade A',
    bg: 'bg-teal-light',
    text: 'text-teal-dark',
    dot: 'bg-teal',
  },
  B: {
    label: 'Grade B',
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    dot: 'bg-amber-400',
  },
  C: {
    label: 'Grade C',
    bg: 'bg-orange-50',
    text: 'text-orange-700',
    dot: 'bg-orange-400',
  },
}

function BatteryBar({ percent }: { percent: number }) {
  const color =
    percent >= 85 ? 'bg-teal' : percent >= 70 ? 'bg-amber-400' : 'bg-orange-400'
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-warm-border rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="font-sans text-xs text-muted-foreground tabular-nums w-8 text-right">
        {percent}%
      </span>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  index?: number
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const grade = gradeConfig[product.grade]
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

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
      className="group bg-white rounded-2xl border border-warm-border overflow-hidden flex flex-col cursor-pointer hover:shadow-xl hover:shadow-charcoal/8 hover:border-warm-border/80 transition-shadow duration-300"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-warm-surface aspect-[4/3]">
        <img
          src={product.image}
          alt={`${product.brand} ${product.model}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Overlays */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-sans font-semibold ${grade.bg} ${grade.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${grade.dot}`} />
            {grade.label}
          </span>
          {product.isNew && (
            <span className="px-2 py-1 rounded-full text-xs font-sans font-semibold bg-charcoal text-white">
              Baru
            </span>
          )}
        </div>

        {discount >= 20 && (
          <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <span className="text-xs font-sans font-bold text-charcoal leading-none text-center">
              -{discount}%
            </span>
          </div>
        )}

        {/* Wishlist */}
        <button
          className="absolute bottom-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur text-charcoal opacity-0 group-hover:opacity-100 transition-opacity hover:text-teal"
          aria-label="Add to wishlist"
        >
          <Heart size={15} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Brand + model */}
        <div>
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
            {product.brand}
          </p>
          <h3 className="font-sans font-semibold text-charcoal text-sm leading-snug line-clamp-2">
            {product.model}
          </h3>
        </div>

        {/* Key specs */}
        <div className="flex flex-wrap gap-1.5">
          {[product.cpu.split(' ').slice(0, 3).join(' '), product.ram, product.ssd].map((spec) => (
            <span
              key={spec}
              className="px-2 py-0.5 rounded-md bg-warm-surface text-charcoal/70 text-xs font-sans"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Battery */}
        <div>
          <div className="flex items-center gap-1.5 mb-1.5">
            <Zap size={11} className="text-muted-foreground" />
            <span className="text-xs font-sans text-muted-foreground">Battery health</span>
          </div>
          <BatteryBar percent={product.battery} />
        </div>

        {/* Badges */}
        {product.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.badges.slice(1).map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-teal-light text-teal-dark text-[11px] font-sans">
                <ShieldCheck size={10} />
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="border-t border-warm-border" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div>
            <div className="font-sans font-bold text-charcoal text-lg leading-none">
              RM {product.price.toLocaleString()}
            </div>
            <div className="font-body text-xs text-muted-foreground line-through mt-0.5">
              RM {product.originalPrice.toLocaleString()}
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-2 bg-charcoal text-white text-xs font-sans font-medium rounded-xl hover:bg-teal transition-colors group/btn">
            <ShoppingCart size={13} />
            <span className="hidden sm:inline">Add</span>
          </button>
        </div>

        {/* For user */}
        <p className="text-xs font-body text-muted-foreground italic">
          Great for: {product.forUser}
        </p>
      </div>
    </motion.article>
  )
}
