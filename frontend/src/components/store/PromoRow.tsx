import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { promoCards, type PromoCard } from '@/data/products'

const cardRotations: Record<string, number> = {
  'back-to-campus': -1.2,
  'wfh-essentials': 1.5,
  'creator-picks': -0.8,
  'gaming-deals': 1.2,
}

const cardAccents: Record<string, { bg: string; text: string; badge: string }> = {
  'back-to-campus': {
    bg: 'bg-teal',
    text: 'text-white',
    badge: 'bg-white/20 text-white',
  },
  'wfh-essentials': {
    bg: 'bg-charcoal',
    text: 'text-white',
    badge: 'bg-white/15 text-white',
  },
  'creator-picks': {
    bg: 'bg-warm-surface',
    text: 'text-charcoal',
    badge: 'bg-charcoal/10 text-charcoal',
  },
  'gaming-deals': {
    bg: 'bg-charcoal',
    text: 'text-white',
    badge: 'bg-teal/25 text-teal-light',
  },
}

function PromoCardItem({ card, index }: { card: PromoCard; index: number }) {
  const accent = cardAccents[card.id]
  const rotation = cardRotations[card.id]
  const isLarge = card.size === 'large'

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotate: rotation }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      whileHover={{ rotate: 0, scale: 1.02, y: -4 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        default: { duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] },
        rotate: { duration: 0.3 },
        scale: { duration: 0.25 },
        y: { duration: 0.3 },
      }}
      className={`
        relative overflow-hidden rounded-3xl cursor-pointer group
        ${accent.bg}
        ${isLarge ? 'col-span-2 row-span-1' : ''}
        ${card.size === 'portrait' ? 'row-span-2' : ''}
      `}
      style={{ minHeight: isLarge ? 220 : card.size === 'portrait' ? 320 : 240 }}
    >
      {/* Background image */}
      <img
        src={card.image}
        alt={card.title}
        className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105 transition-transform"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/10" />

      {/* Content */}
      <div className={`relative z-10 flex flex-col justify-between h-full p-6 ${accent.text}`}>
        <div>
          {card.discount && (
            <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-sans font-semibold mb-3 ${accent.badge}`}>
              {card.discount}
            </span>
          )}
          <h3 className={`font-display leading-tight mb-1 ${isLarge ? 'text-3xl' : 'text-xl'}`}>
            {card.title}
          </h3>
          <p className="font-body text-sm opacity-80 max-w-[200px] leading-snug">
            {card.subtitle}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div>
            <div className="text-xs font-sans opacity-70 mb-0.5">From</div>
            <div className="font-sans font-bold text-xl">RM {card.fromPrice.toLocaleString()}</div>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/15 backdrop-blur flex items-center justify-center group-hover:bg-white/25 transition-colors">
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function PromoRow() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-12 bg-warm-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-end justify-between"
        >
          <div>
            <h2 className="font-display text-3xl text-charcoal">Featured deals</h2>
            <p className="font-body text-muted-foreground mt-1 text-sm">Curated picks across every budget and use case</p>
          </div>
          <a href="#" className="text-sm font-sans text-teal hover:underline flex items-center gap-1 hidden sm:flex">
            View all <ArrowRight size={13} />
          </a>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card spans 2 on lg */}
          <div className="lg:col-span-2">
            <PromoCardItem card={promoCards[0]} index={0} />
          </div>
          {/* Portrait card */}
          <PromoCardItem card={promoCards[1]} index={1} />
          {/* Creator picks */}
          <PromoCardItem card={promoCards[2]} index={2} />
          {/* Gaming square */}
          <PromoCardItem card={promoCards[3]} index={3} />
        </div>
      </div>
    </section>
  )
}
