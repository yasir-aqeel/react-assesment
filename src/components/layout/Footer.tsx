import footerImage from '../../assets/images/footer.png'
import { LazyImage } from '../ui/LazyImage'

const socialLinks = [
  { label: 'Facebook', href: '#', icon: 'f' },
  { label: 'Instagram', href: '#', icon: 'in' },
  { label: 'X', href: '#', icon: 'x' },
  { label: 'Twitter', href: '#', icon: 't' },
  { label: 'LinkedIn', href: '#', icon: 'li' },
  { label: 'Snapchat', href: '#', icon: 'sc' },
]

export function Footer() {
  return (
    <footer aria-label="Site footer" className="relative mt-8">
      <LazyImage
        alt="Remote Recruit footer with logo and social media links"
        className="h-auto w-full"
        src={footerImage}
        wrapperClassName="w-full"
      />

      <div className="sr-only">
        <p>Remote Recruit</p>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
