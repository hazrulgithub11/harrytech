import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Apple, Monitor, Gamepad2, GraduationCap, Cpu, Layers } from 'lucide-react'

const categories = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'macbook', label: 'MacBook', icon: Apple },
  { id: 'thinkpad', label: 'ThinkPad', icon: Monitor },
  { id: 'xps', label: 'Dell XPS', icon: Monitor },
  { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
  { id: 'student', label: 'Student Budget', icon: GraduationCap },
  { id: 'ultrabook', label: 'Ultrabook', icon: Cpu },
]

export function CategoryChips({ onSelect }: { onSelect?: (id: string) => void }) {
  const [active, setActive] = useState('all')
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const handleSelect = (id: string) => {
    setActive(id)
    onSelect?.(id)
  }

  return (
    <section ref={ref} className="py-8 bg-warm-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2.5 overflow-x-auto scrollbar-hide pb-1"
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon
            const isActive = active === cat.id
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                onClick={() => handleSelect(cat.id)}
                className={`
                  flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-sans font-medium
                  border transition-all duration-200 cursor-pointer
                  ${isActive
                    ? 'bg-charcoal text-white border-charcoal shadow-sm'
                    : 'bg-white text-charcoal border-warm-border hover:border-teal hover:text-teal'
                  }
                `}
              >
                <Icon size={14} className="flex-shrink-0" />
                {cat.label}
              </motion.button>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
