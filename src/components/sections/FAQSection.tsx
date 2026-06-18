import { faqItems } from '../../data/faq'
import { Button } from '../ui/Button'
import { SectionReveal } from '../ui/SectionReveal'

export function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      id="faq"
    >
      <SectionReveal>
        <h2
          className="text-3xl font-extrabold text-brand-navy sm:text-4xl"
          id="faq-heading"
        >
          Common Questions
        </h2>

        <div className="mt-10 space-y-10">
          {faqItems.map((item) => (
            <article key={item.id}>
              <h3 className="text-lg font-bold text-brand-navy sm:text-xl">
                {item.question}
              </h3>
              <p className="mt-3 leading-relaxed text-brand-slate">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <Button
          className="mt-10 border-amber-500 px-8 py-3 text-base hover:bg-amber-50"
          variant="outline"
        >
          More Questions
        </Button>
      </SectionReveal>
    </section>
  )
}
