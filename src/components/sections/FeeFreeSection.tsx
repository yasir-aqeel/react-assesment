import feeFreeImage from '../../assets/images/4.png'
import { Badge } from '../ui/Badge'
import { LazyImage } from '../ui/LazyImage'
import { SectionReveal } from '../ui/SectionReveal'

export function FeeFreeSection() {
  return (
    <section
      aria-labelledby="fee-free-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal className="order-2 lg:order-1" variant="left">
          <LazyImage
            alt="Premium membership card showing fee-free features and upcoming payment notification"
            className="mx-auto h-auto w-full max-w-lg object-contain"
            src={feeFreeImage}
            wrapperClassName="w-full max-w-lg mx-auto"
          />
        </SectionReveal>

        <SectionReveal className="order-1 lg:order-2" variant="right">
          <Badge className="mb-6">Actually Fee-Free</Badge>
          <h2
            className="text-3xl font-extrabold text-brand-navy sm:text-4xl lg:text-5xl"
            id="fee-free-heading"
          >
            Fee-Free Forever
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-slate">
            We don&apos;t charge you fees and we don&apos;t put up paywalls.
            We&apos;re the bridge that connects job opportunities with the best
            candidates, with no middleman involved.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
