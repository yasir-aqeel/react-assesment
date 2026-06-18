import { type ImgHTMLAttributes, useState } from 'react'

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  wrapperClassName?: string
}

export function LazyImage({
  alt,
  className = '',
  wrapperClassName = '',
  src,
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 animate-pulse bg-slate-100"
        />
      )}
      <img
        alt={alt}
        className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        decoding="async"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        src={src}
        {...props}
      />
    </div>
  )
}
