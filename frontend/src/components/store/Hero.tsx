export function Hero() {
  return (
    <section className="relative min-h-[58vh] sm:min-h-[64vh] lg:min-h-[70vh] flex items-center overflow-hidden bg-warm-base pt-40 sm:pt-32 lg:pt-36 pb-6 sm:pb-8">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center">
          {/* Left: Copy */}
          <div className="w-full max-w-xl mx-auto text-center">
            <p className="font-sans text-[13px] tracking-wide text-muted-foreground">
              Refurbished, honestly graded. Shipped in Malaysia.
            </p>

            <h1 className="mt-3 font-display text-[2.75rem] sm:text-6xl lg:text-[4.25rem] text-charcoal leading-[1.03]">
              Laptops that feel
              <br />
              <span className="text-charcoal">new again.</span>
            </h1>

            <p className="mt-5 font-body text-muted-foreground text-[1.05rem] sm:text-lg leading-relaxed">
              Each unit is inspected across 50+ checkpoints, cleaned, tested, and backed by warranty — no surprises, just a great machine.
            </p>

            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <a
                href="#products"
                className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-white bg-charcoal rounded-full px-5 py-2.5 hover:bg-black transition-colors"
              >
                Shop now
                <span aria-hidden className="text-white/80">
                  →
                </span>
              </a>
              <a
                href="#trade-in"
                className="inline-flex items-center text-sm font-sans font-semibold text-charcoal hover:text-black transition-colors"
              >
                Trade‑in estimate
                <span className="ml-1.5 text-charcoal/40">›</span>
              </a>
            </div>

            <div className="mt-6 sm:mt-7 text-xs font-body text-muted-foreground">
              50+ checks <span className="mx-2 text-muted-foreground/40">•</span> Warranty included{' '}
              <span className="mx-2 text-muted-foreground/40">•</span> Fast delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
