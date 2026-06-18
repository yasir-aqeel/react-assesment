export type FAQItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'contract',
    question: 'Do I have to sign a long-term contract?',
    answer:
      'Hipster ipsum dolor amet truffaut health goth, plaid chambray yuccie. Banh mi offal jean shorts, kale chips meh master cleanse normcore flexitarian bitters typewriter poke raw denim.',
  },
  {
    id: 'yearly',
    question: 'Can I pay for a whole year?',
    answer:
      'Hipster ipsum dolor amet truffaut health goth, plaid chambray yuccie. Banh mi offal jean shorts, kale chips meh master cleanse normcore flexitarian.',
  },
  {
    id: 'help',
    question: 'What if I need help?',
    answer:
      'Hipster ipsum dolor amet truffaut health goth, plaid chambray yuccie. Banh mi offal jean shorts, kale chips meh master cleanse normcore flexitarian bitters typewriter poke raw denim.',
  },
]
