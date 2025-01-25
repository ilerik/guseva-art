import { Gallery } from "./components/gallery"
import { IntroCard } from "./components/intro-card"
import { Contacts } from "./components/contacts"

export default function Home() {
  return (
    <div className="space-y-8">
      <IntroCard />      
      <Gallery />
      <Contacts />      
    </div>
  )
}

