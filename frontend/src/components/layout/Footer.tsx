import { Link } from 'react-router-dom'

const footerLinks = [
  {
    title: 'Journeys',
    items: [
      { name: 'Signature tours', to: '/destinations' },
      { name: 'Seasonal escapes', to: '/experiences?season=summer' },
      { name: 'Tailored retreats', to: '/planner' },
    ],
  },
  {
    title: 'Need to know',
    items: [
      { name: 'Travel essentials', to: '/planner#faq' },
      { name: 'Responsible travel', to: '/experiences#culture' },
      { name: 'Local partners', to: '/' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-white/40 bg-gradient-to-b from-white/60 to-white/90">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-brand-700">Aurora Armenia</p>
            <p className="mt-4 max-w-md text-sm text-slate-600">
              Crafted journeys through Armenia&apos;s mountains, monasteries, and markets.
              We create immersive itineraries that champion local artisans, slow travel,
              and meaningful connections.
            </p>
            <div className="mt-6 flex gap-4 text-sm text-slate-500">
              <span>hello@auroraarmenia.travel</span>
              <span>·</span>
              <span>+374 (0)55 555 555</span>
            </div>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-slate-700">{section.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link to={item.to} className="transition hover:text-brand-500">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aurora Armenia Travel Atelier. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-brand-500">
              Privacy
            </Link>
            <Link to="/" className="hover:text-brand-500">
              Terms
            </Link>
            <Link to="/" className="hover:text-brand-500">
              Sustainability
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
