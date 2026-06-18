export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          aria-label="Remote Recruit home"
          className="group flex items-center gap-2 transition-opacity hover:opacity-80"
          href="#top"
        >
          <span aria-hidden="true" className="text-xs text-slate-700">
            ▲
          </span>
          <span className="leading-none">
            <span className="block text-xl font-extrabold text-brand-cyan">
              Remote
            </span>
            <span className="block text-xl font-extrabold text-brand-navy">
              Recruit
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="flex items-center gap-4 sm:gap-8"
        >
          <a
            className="text-sm font-bold text-brand-navy transition-colors hover:text-brand-accent"
            href="#faq"
          >
            Sign In
          </a>
          <a
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6ab8d8] hover:shadow-md"
            href="#signup"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  )
}
