import heroImage from '../../assets/images/3.png'
import { Badge } from '../ui/Badge'
import { LazyImage } from '../ui/LazyImage'
import { SectionReveal } from '../ui/SectionReveal'

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <SectionReveal variant="left">
          <Badge className="mb-6">Global Reach</Badge>
          <h1
            className="max-w-xl text-4xl leading-tight font-extrabold text-brand-navy sm:text-5xl lg:text-[3.25rem]"
            id="hero-heading"
          >
            The First Fully Global Job Board, Anywhere, Ever
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-slate">
            RemoteRecruit connects candidates with opportunities around the
            world. With today&apos;s remote-first workforce, you need to be able
            to find the best jobs and the best people for them, wherever they
            may be.
          </p>
        </SectionReveal>

        <SectionReveal className="flex justify-center lg:justify-end" variant="right">
          <LazyImage
            alt="RemoteRecruit dashboard preview showing job search interface with candidate cards"
            className="h-auto w-full max-w-xl object-contain"
            src={heroImage}
            wrapperClassName="w-full max-w-xl"
          />
        </SectionReveal>
      </div>
    </section>
  )
}
