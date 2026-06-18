import { type ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

type SectionRevealProps = {
  children: ReactNode
  className?: string
  variant?: 'up' | 'left' | 'right'
}

export function SectionReveal({
  children,
  className = '',
  variant = 'up',
}: SectionRevealProps) {
  const { ref, className: revealClassName } =
    useScrollReveal<HTMLDivElement>(variant)

  return (
    <div ref={ref} className={`${revealClassName} ${className}`}>
      {children}
    </div>
  )
}
