import { Header } from './components/header'
import { Footer } from './components/footer'
import { Metrika } from "@/app/components/metrika";
import { Suspense } from 'react';
import '@/app/globals.css'

import Script from "next/script"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Guseva Art Gallery',
  description: 'Explore the vibrant world of fashion illustration and painting by Larisa Guseva.',
  verification: {
    yandex: "e16fcf10e2fb2b44",
  },
  openGraph: {
    title: 'Guseva Art Gallery',
    description: 'Explore the vibrant world of fashion illustration and painting by Larisa Guseva.',
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
