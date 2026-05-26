import { Header } from '@/components/store/Header'
import { Hero } from '@/components/store/Hero'
import { CategoryChips } from '@/components/store/CategoryChips'
import { PromoRow } from '@/components/store/PromoRow'
import { ProductGrid } from '@/components/store/ProductGrid'
import { TrustSteps } from '@/components/store/TrustSteps'
import { WhyRefurbished } from '@/components/store/WhyRefurbished'
import { TradeInBand } from '@/components/store/TradeInBand'
import { Testimonials } from '@/components/store/Testimonials'
import { Footer } from '@/components/store/Footer'

export function HomePage() {
  return (
    <div className="min-h-svh w-full bg-background font-body text-foreground">
      <Header />

      <main>
        {/* 1. Hero — the first impression */}
        <Hero />

        {/* 2. Quick category chips */}
        <CategoryChips />

        {/* 3. Featured deals — promo row */}
        <PromoRow />

        {/* 4. Product grid */}
        <ProductGrid />

        {/* 5. Trust & inspection steps */}
        <TrustSteps />

        {/* 6. Why refurbished — editorial */}
        <WhyRefurbished />

        {/* 7. Trade-in CTA */}
        <TradeInBand />

        {/* 8. Testimonials */}
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}
