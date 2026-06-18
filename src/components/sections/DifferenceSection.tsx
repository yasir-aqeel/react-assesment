import { SectionReveal } from '../ui/SectionReveal'

export function DifferenceSection() {
  return (
    <section
      aria-labelledby="difference-heading"
      className="relative overflow-hidden bg-gradient-to-b from-[#0b2f6a] via-[#12458f] to-[#1a5cb0] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-10 right-0 h-80 w-80 rounded-full bg-[#2f7fd4]/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-16 left-1/3 h-64 w-64 rounded-full bg-[#0a2555]/60 blur-2xl"
      />

      <SectionReveal className="relative mx-auto max-w-4xl text-center">
        <h2
          className="text-3xl font-extrabold sm:text-4xl lg:text-5xl"
          id="difference-heading"
        >
          RemoteRecruit&apos;s Difference
        </h2>
        <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
          RemoteRecruit is connecting the world with an easy-to-use platform
          that lets full-time, part-time, and freelance workers showcase their
          talents to businesses that need them. With no paywalls, no fees, and
          no barriers, there&apos;s nothing but you, your talents, and the next
          step in your career.
        </p>
      </SectionReveal>

      <svg
        aria-hidden="true"
        className="absolute right-0 bottom-0 left-0 h-16 w-full text-white sm:h-24"
        preserveAspectRatio="none"
        viewBox="0 0 1440 96"
      >
        <path
          d="M0,64 C360,96 720,0 1080,32 C1260,48 1380,80 1440,64 L1440,96 L0,96 Z"
          fill="currentColor"
        />
      </svg>
    </section>
  )
}
