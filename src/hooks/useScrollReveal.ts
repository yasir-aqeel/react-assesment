import { useEffect, useRef, useState } from 'react'

type RevealVariant = 'up' | 'left' | 'right'

const hiddenClass: Record<RevealVariant, string> = {
  up: 'reveal-hidden',
  left: 'reveal-left-hidden',
  right: 'reveal-right-hidden',
}

const visibleClass: Record<RevealVariant, string> = {
  up: 'reveal-visible',
  left: 'reveal-left-visible',
  right: 'reveal-right-visible',
}

export function useScrollReveal<T extends HTMLElement>(
  variant: RevealVariant = 'up',
  threshold = 0.15,
) {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(element)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold])

  return {
    ref,
    className: isVisible ? visibleClass[variant] : hiddenClass[variant],
  }
}
