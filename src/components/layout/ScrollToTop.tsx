import { useScrollToTop } from '../../hooks/useScrollToTop'

export function ScrollToTop() {
  const { isVisible, scrollToTop } = useScrollToTop()

  return (
    <button
      aria-label="Scroll to top"
      className={`fixed right-4 bottom-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-brand-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 sm:right-6 sm:bottom-6 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      onClick={scrollToTop}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
