import { Header } from './components/header'
import { Footer } from './components/footer'
import { Metrika } from "@/app/components/metrika";
import { Suspense } from 'react';
import '@/app/globals.css'

import Script from "next/script"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Guseva Art Gallery',
  description: 'Larisa Guseva and her works of art.',
  verification: {
    yandex: "e16fcf10e2fb2b44",
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
        <Suspense>
          <Metrika />
        </Suspense>
        {/* <Script id="yandex-metrika" defer>
          {`<!-- Yandex.Metrika counter -->        
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(99524718, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
            });                
            <!-- /Yandex.Metrika counter -->
          `}
        </Script> */}
      </body>
    </html>
  )
}
