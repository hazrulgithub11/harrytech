import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="min-h-svh flex flex-col items-center justify-center gap-4">
      <span className="font-display text-8xl font-semibold text-muted-foreground/30">
        404
      </span>
      <p className="font-body text-muted-foreground">
        Page not found.{' '}
        <Link to="/" className="underline underline-offset-4 hover:text-foreground transition-colors">
          Go home
        </Link>
      </p>
    </main>
  )
}
