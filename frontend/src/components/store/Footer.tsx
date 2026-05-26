import { useState } from 'react'
import { ArrowRight, MessageCircle, Phone, MapPin, Mail } from 'lucide-react'

const footerLinks = {
  Company: [
    { label: 'About HarryTech', href: '#' },
    { label: 'Our story', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  Shop: [
    { label: 'MacBook', href: '#' },
    { label: 'Windows laptops', href: '#' },
    { label: 'Gaming laptops', href: '#' },
    { label: 'Student picks', href: '#' },
    { label: 'Trade-In', href: '#' },
  ],
  Support: [
    { label: 'Condition Guide', href: '#' },
    { label: 'Warranty terms', href: '#' },
    { label: 'FAQ', href: '#' },
    { label: 'Track order', href: '#' },
    { label: 'Returns', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
}

const paymentMethods = ['FPX', 'Visa', 'Mastercard', 'GrabPay', 'Atome', 'TnG e-Wallet']

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubscribed(true)
  }

  return (
    <footer className="bg-charcoal text-white">
      {/* Newsletter band */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="font-display text-xl text-white mb-1">Stay in the loop</h3>
              <p className="font-body text-sm text-white/50">
                New arrivals, flash deals, and grading guides — no spam.
              </p>
            </div>
            {subscribed ? (
              <div className="flex items-center gap-2 text-teal font-sans text-sm font-medium">
                <div className="w-5 h-5 rounded-full bg-teal flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                You're subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                  className="flex-1 sm:w-60 px-4 py-2.5 rounded-xl bg-white/8 border border-white/12 text-sm font-sans text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-teal text-white rounded-xl text-sm font-sans font-medium hover:bg-teal-dark transition-colors flex items-center gap-1.5 flex-shrink-0"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-charcoal font-display font-semibold text-sm">H</span>
              </div>
              <span className="font-display font-semibold text-white text-base">HarryTech</span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5 max-w-[200px]">
              Certified pre-owned laptops. Trusted by students and professionals across Malaysia.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2.5">
              <a href="https://wa.me/60123456789" className="flex items-center gap-2 text-xs font-sans text-white/50 hover:text-teal transition-colors">
                <MessageCircle size={13} />
                WhatsApp: +60 12-345 6789
              </a>
              <a href="tel:+60312345678" className="flex items-center gap-2 text-xs font-sans text-white/50 hover:text-teal transition-colors">
                <Phone size={13} />
                +603 1234 5678
              </a>
              <a href="mailto:hello@harrytech.my" className="flex items-center gap-2 text-xs font-sans text-white/50 hover:text-teal transition-colors">
                <Mail size={13} />
                hello@harrytech.my
              </a>
              <div className="flex items-start gap-2 text-xs font-sans text-white/50">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>Damansara Uptown, Petaling Jaya, Selangor</span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="font-sans font-semibold text-white text-xs uppercase tracking-widest mb-4 opacity-80">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-xs text-white/30">
              © 2026 HarryTech Sdn. Bhd. · SSM Reg. 12345-X · All rights reserved.
            </p>

            {/* Payment badges */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-2 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] font-sans font-medium text-white/40"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
