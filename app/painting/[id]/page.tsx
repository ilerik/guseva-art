import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { paintings } from '@/app/constants'

export function generateStaticParams() {  
  return paintings.map((item, index) => {
    {id: String(index)}
  });
}

export default function PaintingPage({ params }: { params: { id: string } }) {
  const currentPainting = paintings[parseInt(params.id)];

  if (!currentPainting) {
    notFound()
  }

  const currentIndex = paintings.findIndex(p => p.id === currentPainting.id)
  const prevPainting = paintings[currentIndex - 1] || null
  const nextPainting = paintings[currentIndex + 1] || null

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl font-bold">{currentPainting.title}</CardTitle>
          <div className="flex gap-2">
            <span className={`
              px-2 py-1 rounded-full text-sm font-medium
              ${currentPainting.type === 'physical' 
                ? 'bg-blue-500/80 text-white' 
                : 'bg-purple-500/80 text-white'}
            `}>
              {currentPainting.type === 'physical' ? 'Physical' : 'Digital'}
            </span>
            {currentPainting.sold && (
              <span className="px-2 py-1 rounded-full text-sm font-medium bg-red-500/80 text-white">
                Sold
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
      <div className="relative">
          <Image
            src={currentPainting.src}
            alt={currentPainting.title}
            width={800}
            height={800}
            className="w-full h-auto rounded-lg shadow-md"
          />
          {prevPainting && (
            <Link
              href={`/painting/${prevPainting.id}`}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-colors"
              aria-label="Previous painting"
            >
              <ChevronLeft className="w-6 h-6" />
            </Link>
          )}
          {nextPainting && (
            <Link
              href={`/painting/${nextPainting.id}`}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 rounded-full p-2 transition-colors"
              aria-label="Next painting"
            >
              <ChevronRight className="w-6 h-6" />
            </Link>
          )}
        </div>
        <p className="text-lg leading-relaxed">{currentPainting.description}</p>
        <div className="flex justify-between">
          {prevPainting && (
            <Link
              href={`/painting/${prevPainting.id}`}
              className="text-primary hover:underline"
            >
              ← Previous: {prevPainting.title}
            </Link>
          )}
          {nextPainting && (
            <Link
              href={`/painting/${nextPainting.id}`}
              className="text-primary hover:underline ml-auto"
            >
              Next: {nextPainting.title} →
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

