import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, SlidersHorizontal } from 'lucide-react'
import { products, type Category } from '@/data/products'
import { ProductCard } from './ProductCard'

const filters: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'macbook', label: 'MacBook' },
  { id: 'windows', label: 'Windows' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'student', label: 'Under RM2k' },
]

export function ProductGrid() {
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const filtered = products.filter((p) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'student') return p.price < 2000
    return p.category === activeFilter
  })

  return (
    <section id="products" ref={ref} className="py-16 bg-warm-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-end justify-between mb-5">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal">Popular this week</h2>
              <p className="font-body text-muted-foreground mt-1 text-sm">
                Handpicked, graded, and ready to ship across Malaysia
              </p>
            </div>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-sans text-teal hover:underline"
            >
              View all <ArrowRight size={13} />
            </a>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`
                  flex-shrink-0 px-4 py-2 rounded-full text-sm font-sans font-medium
                  border transition-all duration-200
                  ${activeFilter === f.id
                    ? 'bg-charcoal text-white border-charcoal'
                    : 'bg-white text-charcoal border-warm-border hover:border-charcoal'
                  }
                `}
              >
                {f.label}
              </button>
            ))}
            <button className="flex-shrink-0 ml-auto flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-sans border border-warm-border bg-white text-charcoal hover:border-charcoal transition-colors">
              <SlidersHorizontal size={13} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </motion.div>

        {/* Product grid — symmetric */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 sm:gap-x-5 sm:gap-y-6 items-stretch">
          {filtered.map((product, i) => (
            <div key={product.id} className="h-full">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground font-body">
            No laptops match this filter — check back soon.
          </div>
        )}

        {/* Load more */}
        {filtered.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-warm-border rounded-xl text-sm font-sans font-medium text-charcoal hover:border-teal hover:text-teal transition-colors">
              Load more laptops
              <ArrowRight size={15} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
