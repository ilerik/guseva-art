import Image from "next/image"

export function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-1/3 relative">
            <Image
              src="portrait.jpg"
              alt="Larisa Guseva"
              width={400}
              height={400}
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-2/3 space-y-4">
            <p className="text-lg">
              Larisa Guseva is a distinguished fashion illustrator and painter whose artistic journey began with classical education in Chelyabinsk, Russia. Her unique blend of traditional techniques and contemporary vision has earned her recognition in the cultural underground art scene.
            </p>
            <p>
              With a masterful command of various mediums, from watercolors to digital art, Larisa creates striking fashion illustrations that capture both the elegance of classical portraiture and the edge of modern style. Her work is characterized by bold strokes, vibrant colors, and an innate ability to capture the essence of her subjects.
            </p>
            <p>
              Currently, her piece `White Elegance` is being exhibited at the prestigious Me Dubai hotel, marking a significant milestone in her artistic career. This recognition reflects the growing appreciation for her distinctive style that bridges the gap between underground art culture and mainstream recognition.
            </p>
            <p>
              Through her art, Larisa continues to push boundaries and challenge conventional fashion illustration norms, creating pieces that resonate with both art enthusiasts and fashion aficionados alike. Her work stands as a testament to the power of merging classical training with contemporary expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

