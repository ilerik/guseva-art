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
              alt="Логотип Guseva Art"
              width={100}
              height={30}
              className=""
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/#gallery" className="text-foreground hover:text-primary transition-colors">
            Галерея
          </Link>
          <Link href="/about" className="text-nowrap text-foreground hover:text-primary transition-colors">
            Обо мне
          </Link>
          <Link href="/#contacts" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </Link>        
        </nav>
      </div>
    </header>
  )
}

