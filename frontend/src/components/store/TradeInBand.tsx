import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { RefreshCw, ChevronDown, ArrowRight } from 'lucide-react'

const brands = ['Apple', 'Lenovo', 'Dell', 'HP', 'ASUS', 'Acer', 'MSI', 'Samsung', 'Other']
const conditions = [
  { id: 'excellent', label: 'Excellent — like new, no scratches' },
  { id: 'good', label: 'Good — minor wear, fully functional' },
  { id: 'fair', label: 'Fair — visible wear, works fine' },
  { id: 'poor', label: 'Poor — significant damage or issues' },
]

export function TradeInBand() {
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [condition, setCondition] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (brand && model && condition) setSubmitted(true)
  }

  return (
    <section id="trade-in" ref={ref} className="py-20 bg-warm-surface overflow-hidden relative">
      {/* Decorative teal blob */}
      <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-teal/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-teal/5 blur-2xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-light text-teal-dark text-xs font-sans font-semibold mb-6 border border-teal/20">
              <RefreshCw size={12} />
              Trade-In Programme
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight mb-4">
              Upgrade without
              <br />
              <span className="text-teal">the waste.</span>
            </h2>

            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
              Get an instant estimate for your old laptop. We'll credit the value toward your next purchase — or simply buy it outright.
            </p>

            <div className="flex flex-col gap-3">
              {[
                'Instant online quote — no obligation',
                'Free pickup or drop-off at our KL outlet',
                'Payment in 24h after device inspection',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-body text-sm text-charcoal/80">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="bg-white rounded-3xl border border-warm-border p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-light flex items-center justify-center mx-auto mb-4">
                    <RefreshCw size={28} className="text-teal" />
                  </div>
                  <h3 className="font-display text-2xl text-charcoal mb-2">Quote submitted!</h3>
                  <p className="font-body text-muted-foreground text-sm mb-6">
                    We'll WhatsApp you an estimate within 2 hours on business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setBrand(''); setModel(''); setCondition('') }}
                    className="text-sm font-sans text-teal hover:underline"
                  >
                    Submit another device
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3 className="font-display text-2xl text-charcoal mb-1">Get my trade-in estimate</h3>
                  <p className="font-body text-sm text-muted-foreground mb-6">Takes less than 60 seconds</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Brand select */}
                    <div className="relative">
                      <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                        Brand
                      </label>
                      <div className="relative">
                        <select
                          value={brand}
                          onChange={(e) => setBrand(e.target.value)}
                          required
                          className="w-full appearance-none px-4 py-3 rounded-xl border border-warm-border bg-warm-surface text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all"
                        >
                          <option value="" disabled>Select brand…</option>
                          {brands.map((b) => (
                            <option key={b} value={b}>{b}</option>
                          ))}
                        </select>
                        <ChevronDown size={15} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>

                    {/* Model input */}
                    <div>
                      <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                        Model / Series
                      </label>
                      <input
                        type="text"
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        required
                        placeholder="e.g. MacBook Air M1, ThinkPad X1 Carbon…"
                        className="w-full px-4 py-3 rounded-xl border border-warm-border bg-warm-surface text-sm font-sans text-charcoal focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all placeholder:text-muted-foreground"
                      />
                    </div>

                    {/* Condition */}
                    <div>
                      <label className="block text-xs font-sans font-medium text-charcoal mb-1.5">
                        Condition
                      </label>
                      <div className="grid grid-cols-1 gap-2">
                        {conditions.map((c) => (
                          <label
                            key={c.id}
                            className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border cursor-pointer transition-all ${
                              condition === c.id
                                ? 'border-teal bg-teal-light'
                                : 'border-warm-border bg-warm-surface hover:border-teal/40'
                            }`}
                          >
                            <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 transition-all ${
                              condition === c.id ? 'border-teal bg-teal' : 'border-warm-border'
                            }`}>
                              {condition === c.id && (
                                <div className="w-full h-full rounded-full bg-white scale-50" />
                              )}
                            </div>
                            <input
                              type="radio"
                              name="condition"
                              value={c.id}
                              checked={condition === c.id}
                              onChange={() => setCondition(c.id)}
                              className="sr-only"
                            />
                            <span className="text-xs font-sans text-charcoal">{c.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={!brand || !model || !condition}
                      className="mt-2 w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal text-white font-sans font-semibold text-sm rounded-xl hover:bg-teal transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Get my estimate
                      <ArrowRight size={15} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
