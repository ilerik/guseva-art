import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function IntroCard() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Welcome to My Art Gallery</CardTitle>
        <CardDescription>A journey through colors and emotions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">         
          <div className="md:w-2/3 space-y-4">
            <p className="text-lg">
              Hello! I'm Larisa Guseva, and I'm thrilled to welcome you to my digital art sanctuary. 
              As a passionate artist with roots in classical education from Chelyabinsk, Russia, 
              I've dedicated my life to exploring the boundless realms of creativity through fashion illustration and painting.
            </p>
            <p className="text-lg">
              My art is a fusion of traditional techniques and contemporary vision, 
              capturing the essence of fashion, beauty, and human emotion. Each piece 
              is a testament to my journey as an artist and my endless fascination with 
              the power of visual storytelling.
            </p>
            <p className="text-lg">
              I invite you to explore my gallery, where each artwork is a window into my 
              creative world. Whether you're drawn to the bold strokes of my fashion 
              illustrations or the nuanced emotions in my portraits, I hope my art resonates 
              with you and sparks your own imagination.
            </p>
            <div className="pt-4">
              <Link href="/Larisa_Guseva_Portfolio.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                  <FileDown className="mr-2 h-4 w-4" /> Download Full Portfolio (PDF)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

