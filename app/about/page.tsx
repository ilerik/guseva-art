import { Metadata } from 'next'
import { About } from '../components/about'

export const metadata: Metadata = {
  title: 'Био',
  description: 'Миссия и бэкграунд',
  openGraph: {
    title: 'Био',
    description: 'Миссия и бэкграунд',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <About />
    </div>
  )
}

