import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, X, Leaf } from 'lucide-react'

const comparison = [
  {
    feature: 'Price',
    newDevice: 'Full retail',
    refurb: '40–65% less',
    refurbWins: true,
  },
  {
    feature: 'Warranty',
    newDevice: '1 year brand',
    refurb: '3 months + extendable',
    refurbWins: false,
  },
  {
    feature: 'Availability',
    newDevice: 'Current models only',
    refurb: 'Classic & current',
    refurbWins: true,
  },
  {
    feature: 'CO₂ footprint',
    newDevice: '~300kg per device',
    refurb: '~20kg (80% less)',
    refurbWins: true,
  },
  {
    feature: 'Tested condition',
    newDevice: 'Factory QC only',
    refurb: '50+ point inspection',
    refurbWins: true,
  },
  {
    feature: 'Return window',
    newDevice: '7–14 days (varies)',
    refurb: '7 days (Grade A)',
    refurbWins: false,
  },
]

export function WhyRefurbished() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 bg-warm-base overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: editorial narrative */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-light text-teal-dark text-xs font-sans font-semibold mb-6 border border-teal/20">
              <Leaf size={12} />
              Give tech a second life
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight mb-6">
              Why buy
              <br />
              refurbished?
            </h2>

            <div className="space-y-5 font-body text-charcoal/75 text-base leading-relaxed">
              <p>
                A laptop manufactured today carries the environmental weight of raw material mining, ocean freight, and factory emissions — before it even reaches a shelf. Choosing a certified pre-owned device sidesteps nearly all of that.
              </p>
              <p>
                But sustainability isn't the only reason. The economics are straightforward: a <strong className="text-charcoal font-semibold">Grade A MacBook Air M1</strong> runs identical workloads to its brand-new sibling, at less than half the price. For students, freelancers, and growing businesses, that gap matters.
              </p>

              {/* Pull quote */}
              <blockquote className="relative border-l-4 border-teal pl-5 py-1 my-6">
                <p className="font-display text-xl text-charcoal italic leading-snug">
                  "The best device is the one that already exists — just better maintained."
                </p>
              </blockquote>

              <p>
                At HarryTech, we don't just clean and relist. Each unit is tested by certified technicians, given an honest grade, and backed by a real warranty. You get transparency, not hope.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {['MacBook', 'ThinkPad', 'XPS', 'ROG', 'EliteBook'].map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1.5 rounded-full border border-warm-border font-sans text-xs text-charcoal/60 bg-white hover:border-teal hover:text-teal transition-colors cursor-pointer"
                >
                  {brand}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: comparison table */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-3xl border border-warm-border overflow-hidden bg-white shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-warm-surface px-5 py-3.5 border-b border-warm-border">
                <div className="font-sans text-xs text-muted-foreground font-medium">Feature</div>
                <div className="font-sans text-xs text-muted-foreground font-medium text-center">Brand New</div>
                <div className="font-sans text-xs font-semibold text-teal text-center">Our Refurb</div>
              </div>

              {/* Rows */}
              {comparison.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
                  className={`grid grid-cols-3 px-5 py-4 border-b border-warm-border last:border-0 items-center ${
                    row.refurbWins ? 'bg-white' : 'bg-warm-surface/30'
                  }`}
                >
                  <div className="font-sans text-sm text-charcoal font-medium">{row.feature}</div>

                  <div className="text-center">
                    <span className="font-body text-xs text-muted-foreground">{row.newDevice}</span>
                  </div>

                  <div className="flex items-center justify-center gap-1.5">
                    {row.refurbWins ? (
                      <Check size={13} className="text-teal flex-shrink-0" />
                    ) : (
                      <X size={13} className="text-muted-foreground flex-shrink-0" />
                    )}
                    <span
                      className={`font-body text-xs ${
                        row.refurbWins ? 'text-teal font-semibold' : 'text-muted-foreground'
                      }`}
                    >
                      {row.refurb}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer note */}
            <p className="mt-4 text-xs font-body text-muted-foreground px-1">
              * Warranty terms apply to Grade A and B units. Grade C devices are sold as-is with free 7-day return.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
