import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { paintings } from '@/app/constants'

export function generateStaticParams() {  
  return paintings.map((item, index) => {
    {id: String(index)}
  });
}

export default function PaintingPage({ params }: { params: { id: string } }) {
  const painting = paintings.find(p => p.id === parseInt(params.id))

  if (!painting) {
    notFound()
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl font-bold">{painting.title}</CardTitle>
          <div className="flex gap-2">
            <span className={`
              px-2 py-1 rounded-full text-sm font-medium
              ${painting.type === 'physical' 
                ? 'bg-blue-500/80 text-white' 
                : 'bg-purple-500/80 text-white'}
            `}>
              {painting.type === 'physical' ? 'Physical' : 'Digital'}
            </span>
            {painting.sold && (
              <span className="px-2 py-1 rounded-full text-sm font-medium bg-red-500/80 text-white">
                Sold
              </span>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <Image
          src={painting.src}
          alt={painting.title}
          width={800}
          height={800}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="text-lg leading-relaxed">{painting.description}</p>
      </CardContent>
    </Card>
  )
}

