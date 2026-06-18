import signupImage from '../../assets/images/7.png'
import { LazyImage } from '../ui/LazyImage'
import { SectionReveal } from '../ui/SectionReveal'

export function SignUpAdSection() {
  return (
    <section
      aria-labelledby="signup-heading"
      className="bg-black px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="signup"
    >
      <h2 className="sr-only" id="signup-heading">
        Sign up and get started
      </h2>

      <SectionReveal className="mx-auto max-w-7xl">
        <LazyImage
          alt="RemoteRecruit dashboard with a call to action to get started quickly"
          className="mx-auto h-auto w-full object-contain"
          src={signupImage}
          wrapperClassName="w-full"
        />
      </SectionReveal>
    </section>
  )
}
