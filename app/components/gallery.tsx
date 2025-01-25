import Image from 'next/image'
import Link from 'next/link'

import { paintings } from '@/app/constants'

export function Gallery() {
  return (
    <div id='gallery'>
    <h2 className="text-2xl font-bold mb-4">My Artworks</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {paintings.map((painting, index) => (
        <Link 
          href={`/painting/${index}`} 
          key={index} 
          className={`relative group ${painting.span ? 'col-span-2 row-span-2' : ''}`}
        >
          <Image
            src={painting.src}
            alt={painting.title}
            width={painting.span ? 800 : 400}
            height={painting.span ? 800 : 400}
            className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
            <h3 className="text-white text-xl font-semibold px-4 text-center">{painting.title}</h3>
          </div>
          <div className="absolute bottom-2 left-2 flex gap-2">
            <span className={`
              px-2 py-1 rounded-full text-xs font-medium
              ${painting.type === 'physical' 
                ? 'bg-blue-500/80 text-white' 
                : 'bg-purple-500/80 text-white'}
            `}>
              {painting.type === 'physical' ? 'Physical' : 'Digital'}
            </span>
            {painting.sold && (
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-500/80 text-white">
                Sold
              </span>
            )}
          </div>
        </Link>
      ))}
    </div>
    </div>
  )
}

