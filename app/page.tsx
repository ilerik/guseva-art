import { Gallery } from './components/gallery'
import { IntroCard } from './components/intro-card'

export default function Home() {
  return (
    <div className="space-y-8">
      <IntroCard />
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  )
}


