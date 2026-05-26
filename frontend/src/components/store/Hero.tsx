import { motion } from 'framer-motion'
import { ArrowRight, RefreshCw, ShieldCheck, Zap } from 'lucide-react'

const stats = [
  { value: '500+', label: 'Units sold' },
  { value: '98%', label: 'Satisfaction' },
  { value: '72%', label: 'Avg battery' },
]

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-warm-base pt-32 pb-16">
      {/* Subtle background decorations */}
      <div className="absolute top-24 right-0 w-[55%] h-full bg-warm-surface rounded-l-[4rem] -z-0" />
      <div className="absolute bottom-12 left-12 w-64 h-64 rounded-full bg-teal/5 blur-3xl -z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-0 items-center">

          {/* Left: Copy */}
          <div className="pr-0 lg:pr-12 py-8">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-light text-teal-dark text-xs font-sans font-semibold mb-6 border border-teal/20"
            >
              <ShieldCheck size={13} />
              <span>Inspected · Tested · Graded</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-4"
            >
              Pro laptops.
              <br />
              <span className="text-teal">Second life.</span>
              <br />
              First-class
              <br />
              quality.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="font-body text-muted-foreground text-lg max-w-md mb-8 leading-relaxed"
            >
              Every laptop inspected across 50+ checkpoints, graded honestly, and shipped across Malaysia — with a warranty you can actually rely on.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal text-white font-sans font-semibold text-sm rounded-xl hover:bg-teal transition-colors duration-200 group"
              >
                Shop laptops
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#trade-in"
                className="inline-flex items-center gap-2 px-6 py-3 border border-warm-border bg-white text-charcoal font-sans font-medium text-sm rounded-xl hover:border-teal hover:text-teal transition-colors duration-200"
              >
                <RefreshCw size={15} />
                Check my trade-in value
              </a>
            </motion.div>

            {/* Floating stats — offset row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex items-stretch gap-3"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                  className={`flex-1 min-w-0 rounded-2xl border border-warm-border bg-white/80 backdrop-blur px-4 py-3 ${
                    i === 1 ? '-translate-y-2' : i === 2 ? 'translate-y-1' : ''
                  }`}
                >
                  <div className="font-display text-2xl text-charcoal leading-none">{stat.value}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Featured image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* Image container with tilt */}
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Grade badge — floats above image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="absolute -top-4 -left-4 z-20 bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-warm-border"
              >
                <span className="w-6 h-6 rounded-full bg-teal flex items-center justify-center text-white text-xs font-sans font-bold">A</span>
                <div>
                  <div className="text-xs font-sans font-semibold text-charcoal leading-none">Grade A</div>
                  <div className="text-[10px] font-sans text-muted-foreground mt-0.5">Like new condition</div>
                </div>
              </motion.div>

              {/* Battery health badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -bottom-3 right-4 z-20 bg-white shadow-lg rounded-2xl px-3 py-2 flex items-center gap-2 border border-warm-border"
              >
                <Zap size={14} className="text-teal flex-shrink-0" />
                <div>
                  <div className="text-xs font-sans font-semibold text-charcoal leading-none">Battery 91%</div>
                  <div className="text-[10px] font-sans text-muted-foreground mt-0.5">Healthy · Tested</div>
                </div>
              </motion.div>

              {/* Main laptop image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10">
                <img
                  src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=900&q=85"
                  alt="MacBook Air M1 — Grade A certified"
                  className="w-full object-cover aspect-[4/3] lg:aspect-[3/2]"
                  loading="eager"
                />
                {/* Subtle overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2.5 inline-flex items-center gap-3">
                    <div>
                      <div className="font-sans font-semibold text-charcoal text-sm leading-none">MacBook Air M1 2020</div>
                      <div className="font-body text-muted-foreground text-xs mt-0.5">8GB · 256GB · Grade A</div>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="font-sans font-bold text-charcoal text-base leading-none">RM 2,799</div>
                      <div className="font-body text-muted-foreground text-xs mt-0.5 line-through">RM 4,299</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
