import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScanSearch, Cpu, BarChart3, PackageCheck, ArrowRight } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: ScanSearch,
    title: 'Inspect',
    desc: 'Every unit examined across 50+ physical checkpoints — screen, ports, keyboard, chassis.',
  },
  {
    num: '02',
    icon: Cpu,
    title: 'Test',
    desc: 'Full diagnostics: CPU burn-in, RAM stress, SSD health, battery cycle count, display calibration.',
  },
  {
    num: '03',
    icon: BarChart3,
    title: 'Grade',
    desc: 'Honest grading — A, B, or C — with no hidden surprises. What you see is what ships.',
  },
  {
    num: '04',
    icon: PackageCheck,
    title: 'Ship',
    desc: 'Bubble-wrapped, boxed, and dispatched across Peninsular & East Malaysia within 3 business days.',
  },
]

export function TrustSteps() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-20 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-teal font-sans text-sm font-semibold tracking-widest uppercase mb-2">How we do it</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight">
              Every laptop earns
              <br />
              its grade honestly.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-sans text-white/60 hover:text-teal transition-colors self-start sm:self-auto"
          >
            See our full grading guide <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Timeline steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-white/10" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 32 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-start lg:items-center px-0 lg:px-6 pb-10 lg:pb-0"
              >
                {/* Step number — bleed behind icon */}
                <div className="relative mb-4">
                  {/* Large bg number */}
                  <span className="absolute -top-3 -left-2 font-display text-6xl text-white/5 select-none leading-none pointer-events-none">
                    {step.num}
                  </span>
                  {/* Icon circle */}
                  <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center">
                    <Icon size={22} className="text-teal" />
                  </div>
                </div>

                {/* Arrow connector (mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden sm:block lg:hidden absolute bottom-4 left-6">
                    <ArrowRight size={14} className="text-white/20" />
                  </div>
                )}

                <div className="lg:text-center">
                  <h3 className="font-display text-xl text-white mb-2">{step.title}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed max-w-[220px] lg:max-w-none">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { val: '50+', label: 'Checkpoint tests' },
            { val: '3mo', label: 'Warranty included' },
            { val: '7-day', label: 'Return window (Grade A)' },
            { val: '98%', label: 'Customer satisfaction' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/5 border border-white/8 px-5 py-4">
              <div className="font-display text-2xl text-teal mb-1">{item.val}</div>
              <div className="font-body text-xs text-white/50">{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
