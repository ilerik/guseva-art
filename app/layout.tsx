import { Header } from './components/header'
import { Footer } from './components/footer'
import '@/app/globals.css'

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Guseva Art Gallery',
  description: 'Larisa Guseva and her works of art.',
  verification: {
    yandex: "055acd79377c5c08",
  },
  openGraph: {
    title: 'Guseva Art Gallery',
    description: 'Larisa Guseva and her works of art.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'