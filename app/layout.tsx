import { Header } from './components/header'
import { Footer } from './components/footer'
import { Metrika } from "@/app/components/metrika";
import { Suspense } from 'react';
import '@/app/globals.css'

import Script from "next/script"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Художественная Галерея Ларисы Гусевой',
  description: 'Откройте для себя яркий мир модной иллюстрации и живописи Ларисы Гусевой.',
  verification: {
    yandex: "e16fcf10e2fb2b44",
  },
  openGraph: {
    title: 'Художественная Галерея Ларисы Гусевой',
    description: 'Откройте для себя яркий мир модной иллюстрации и живописи Ларисы Гусевой.',
  },
  icons: [{ rel: "icon", url: "/icon.svg" }],
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
        <Suspense>
          <Metrika />
        </Suspense>        
      </body>
    </html>
  )
}
