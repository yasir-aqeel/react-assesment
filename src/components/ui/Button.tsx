import { type ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'cta'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-blue text-white hover:bg-[#6ab8d8] focus-visible:ring-brand-blue',
  outline:
    'border-2 border-brand-navy bg-white text-brand-navy hover:bg-brand-badge focus-visible:ring-brand-navy',
  cta: 'bg-[#e11d48] text-white hover:bg-[#be123c] focus-visible:ring-[#e11d48]',
}

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
