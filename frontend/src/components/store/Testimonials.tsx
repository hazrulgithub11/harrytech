import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Amirul Hakim',
    location: 'Petaling Jaya, Selangor',
    rating: 5,
    text: 'Bought a Grade A ThinkPad X1 for uni. Condition is honestly like new — not a scratch on it. Battery still holds nearly the whole day. HarryTech was fully transparent about everything, no surprises.',
    model: 'ThinkPad X1 Carbon Gen 9',
    avatar: 'A',
  },
  {
    id: 2,
    name: 'Nurul Ain Zulkifli',
    location: 'Johor Bahru, Johor',
    rating: 5,
    text: 'As a freelance graphic designer, I needed a reliable MacBook without blowing my budget. The M1 I got from HarryTech has been running Figma and Lightroom perfectly for 6 months. Worth every ringgit.',
    model: 'MacBook Air M1 2020',
    avatar: 'N',
  },
  {
    id: 3,
    name: 'Rajendran Pillai',
    location: 'Georgetown, Penang',
    rating: 5,
    text: 'Sceptical at first — bought a refurb before from elsewhere and it died in 3 months. With HarryTech the inspection report was detailed, the WhatsApp support was fast, and the laptop arrived perfectly packaged. Sudah rekemen kat kawan-kawan.',
    model: 'HP EliteBook 840 G8',
    avatar: 'R',
  },
]

const offsets = ['mt-0', 'mt-[-1.5rem]', 'mt-4']

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < count ? 'text-amber-400 fill-amber-400' : 'text-warm-border'}
        />
      ))}
    </div>
  )
}

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [userPaused, setUserPaused] = useState(false)

  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    if (!inView) return
    if (userPaused) return

    const el = scrollerRef.current
    if (!el) return

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % testimonials.length)
    }, 4200)

    return () => window.clearInterval(id)
  }, [inView, reduceMotion, userPaused])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    // Important: avoid `scrollIntoView` because it can scroll the page vertically.
    // We only want to move the horizontal carousel.
    if (el.scrollWidth <= el.clientWidth) return

    const target = el.querySelector<HTMLElement>(`[data-slide="${activeIndex}"]`)
    if (!target) return

    const left = Math.max(0, target.offsetLeft - 16)
    el.scrollTo({ left, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [activeIndex, reduceMotion])

  return (
    <section ref={ref} className="py-20 bg-warm-base relative overflow-hidden">
      {/* Decorative teal circle behind last card */}
      <div className="absolute right-8 bottom-16 w-48 h-48 rounded-full bg-teal/6 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-charcoal">
            Trusted by Malaysians
          </h2>
          <p className="font-body text-muted-foreground mt-2 text-sm max-w-md">
            Real buyers, real laptops — unfiltered reviews from our community
          </p>
        </motion.div>

        {/* Cards — auto-sliding on mobile, staggered grid on sm+ */}
        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-5 overflow-x-auto pb-2 -mx-4 px-4 scroll-px-4 snap-x snap-mandatory sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-5 sm:items-start sm:overflow-visible sm:snap-none"
            style={{ WebkitOverflowScrolling: 'touch' }}
            onPointerDown={() => setUserPaused(true)}
            onPointerUp={() => setUserPaused(false)}
            onPointerCancel={() => setUserPaused(false)}
            onPointerLeave={() => setUserPaused(false)}
            onMouseEnter={() => setUserPaused(true)}
            onMouseLeave={() => setUserPaused(false)}
            onTouchStart={() => setUserPaused(true)}
            onTouchEnd={() => setUserPaused(false)}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                data-slide={i}
                initial={{ opacity: 0, y: 36 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`snap-center shrink-0 w-[86%] sm:w-auto ${offsets[i]}`}
              >
                <div className="bg-white rounded-3xl border border-warm-border p-6 flex flex-col gap-4 hover:shadow-lg hover:shadow-charcoal/6 transition-shadow duration-300">
                  {/* Quote icon */}
                  <Quote size={20} className="text-teal opacity-60" />

                  {/* Stars */}
                  <StarRating count={t.rating} />

                  {/* Text */}
                  <p className="font-body text-sm text-charcoal/75 leading-relaxed flex-1">
                    "{t.text}"
                  </p>

                  {/* Model purchased */}
                  <div className="px-2.5 py-1.5 bg-teal-light rounded-lg inline-flex self-start">
                    <span className="text-xs font-sans font-medium text-teal-dark">{t.model}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-warm-border pt-4">
                    <div className="w-9 h-9 rounded-full bg-charcoal flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-display text-sm">{t.avatar}</span>
                    </div>
                    <div>
                      <div className="font-sans font-semibold text-charcoal text-sm leading-none">{t.name}</div>
                      <div className="font-body text-xs text-muted-foreground mt-0.5">{t.location}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subtle progress dots (mobile only) */}
          <div className="mt-5 flex items-center gap-2 sm:hidden">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeIndex ? 'w-7 bg-charcoal/70' : 'w-3 bg-charcoal/20'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}
