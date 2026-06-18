import { type HTMLAttributes } from 'react'

type BadgeProps = HTMLAttributes<HTMLSpanElement>

export function Badge({ className = '', children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-brand-navy bg-brand-badge px-4 py-1 text-sm font-semibold text-brand-navy ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
