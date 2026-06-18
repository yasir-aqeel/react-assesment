import showcaseImage from '../../assets/images/6.png'
import { Badge } from '../ui/Badge'
import { LazyImage } from '../ui/LazyImage'
import { SectionReveal } from '../ui/SectionReveal'

export function ShowcaseSection() {
  return (
    <section
      aria-labelledby="showcase-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal variant="left">
          <Badge className="mb-6">Custom Profile</Badge>
          <h2
            className="text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl"
            id="showcase-heading"
          >
            Showcase Your Talents
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-slate">
            Personalize your profile with everything that makes you unique. Add
            an introductory video and other media for a personal touch that
            stands out to employers and candidates.
          </p>
        </SectionReveal>

        <SectionReveal className="flex justify-center lg:justify-end" variant="right">
          <LazyImage
            alt="Custom profile card with video preview, client feedback, and skill tags"
            className="h-auto w-full max-w-lg object-contain"
            src={showcaseImage}
            wrapperClassName="w-full max-w-lg"
          />
        </SectionReveal>
      </div>
    </section>
  )
}
