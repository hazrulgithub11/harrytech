import { useState, useEffect } from 'react'
import { Search, Heart, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Shop', href: '#' },
  { label: 'Brands', href: '#', hasDropdown: true },
  { label: 'Condition Guide', href: '#' },
  { label: 'Trade-In', href: '#' },
  { label: 'Support', href: '#' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [promoDismissed, setPromoDismissed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartCount] = useState(2)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Slim promo bar */}
      <AnimatePresence>
        {!promoDismissed && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-teal text-white overflow-hidden"
          >
            <div className="flex items-center justify-center gap-2 px-4 py-2 text-xs font-sans font-medium relative">
              <span className="hidden sm:inline">✦</span>
              <span>Free 7-day return on Grade A &nbsp;•&nbsp; 3-month warranty included &nbsp;•&nbsp; Free shipping above RM150</span>
              <span className="hidden sm:inline">✦</span>
              <button
                onClick={() => setPromoDismissed(true)}
                className="absolute right-3 top-1/2 -translate-y-1/2 opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Dismiss"
              >
                <X size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main header */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-warm-base/95 backdrop-blur-md shadow-sm border-b border-warm-border'
            : 'bg-warm-base border-b border-warm-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-4 h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center gap-2 group">
              <div className="w-8 h-8 bg-charcoal rounded-lg flex items-center justify-center group-hover:bg-teal transition-colors duration-200">
                <span className="text-white font-display font-semibold text-sm">H</span>
              </div>
              <div className="hidden sm:block leading-tight">
                <div className="font-display font-semibold text-charcoal text-base leading-none">HarryTech</div>
                <div className="text-[10px] font-sans text-muted-foreground tracking-wide leading-none mt-0.5">Certified pre-owned laptops</div>
              </div>
            </a>

            {/* Search bar — center */}
            <div className="flex-1 max-w-xl mx-auto hidden md:block">
              <div className="relative group">
                <Search
                  size={16}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-teal transition-colors"
                />
                <input
                  type="text"
                  placeholder="Search MacBook, ThinkPad, gaming laptop…"
                  className="w-full pl-10 pr-4 py-2.5 text-sm font-sans bg-warm-surface border border-warm-border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all placeholder:text-muted-foreground"
                />
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1 ml-auto md:ml-0">
              {/* Mobile search */}
              <button className="md:hidden p-2 rounded-lg hover:bg-warm-surface text-charcoal transition-colors" aria-label="Search">
                <Search size={20} />
              </button>

              <button className="p-2 rounded-lg hover:bg-warm-surface text-charcoal transition-colors hidden sm:flex" aria-label="Wishlist">
                <Heart size={20} />
              </button>

              <button className="relative p-2 rounded-lg hover:bg-warm-surface text-charcoal transition-colors" aria-label="Cart">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-teal text-white text-[10px] font-sans font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <button className="p-2 rounded-lg hover:bg-warm-surface text-charcoal transition-colors hidden sm:flex" aria-label="Account">
                <User size={20} />
              </button>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-warm-surface text-charcoal transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0 border-t border-warm-border -mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto scrollbar-hide">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 px-4 py-2.5 text-sm font-sans text-charcoal/70 hover:text-charcoal hover:bg-warm-surface rounded-lg whitespace-nowrap transition-colors group"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown size={13} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                )}
              </a>
            ))}
            <div className="ml-auto flex-shrink-0 py-2">
              <a
                href="#trade-in"
                className="px-4 py-1.5 text-sm font-sans font-medium bg-teal text-white rounded-full hover:bg-teal-dark transition-colors"
              >
                Get trade-in quote
              </a>
            </div>
          </nav>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-warm-border bg-warm-base"
            >
              <div className="px-4 py-3 space-y-1">
                {/* Mobile search */}
                <div className="relative mb-3">
                  <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search laptops…"
                    className="w-full pl-9 pr-4 py-2.5 text-sm font-sans bg-warm-surface border border-warm-border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal"
                  />
                </div>
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="flex items-center justify-between px-3 py-2.5 text-sm font-sans text-charcoal rounded-lg hover:bg-warm-surface transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-40" />}
                  </a>
                ))}
                <div className="pt-2 pb-1">
                  <a
                    href="#trade-in"
                    className="block w-full text-center px-4 py-2.5 text-sm font-sans font-medium bg-teal text-white rounded-xl"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get trade-in quote
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
