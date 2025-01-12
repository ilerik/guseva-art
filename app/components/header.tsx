import { Instagram, Send, Info, Sailboat } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="guseva.png"
              alt="Guseva Art Logo"
              width={100}
              height={30}
              className=""
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Gallery
          </Link>
          <Link href="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <a
            href="https://opensea.io/guseva_art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Image
              src="/socials/opensea-color.svg"
              width={24}
              height={24}
              alt="OpenSea Link"              
            />
          </a>
          <a
            href="https://instagram.com/guseva_art"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Image
              src="/socials/instagram-color.svg"
              width={24}
              height={24}
              alt="Instagram Link"              
            />            
          </a>
          <a
            href="https://t.me/teleguseva"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
            aria-label="Telegram"
          >
            <Image
              src="/socials/telegram-color.svg"
              width={24}
              height={24}
              alt="Telegram Link"              
            />  
          </a>
        </nav>
      </div>
    </header>
  )
}

