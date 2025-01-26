import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileDown } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function IntroCard() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Добро пожаловать в мою галерею</CardTitle>
        <CardDescription>Путешествие через цвета и эмоции</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col md:flex-row gap-6">         
          <div className="md:w-2/3 space-y-4">
            <p className="text-lg">
              Здравствуйте! Я Лариса Гусева, и я рада приветствовать вас в моем цифровом арт-пространстве. 
              Как художник с классическим образованием из Челябинска, я посвятила свою жизнь исследованию 
              безграничных возможностей творчества через модную иллюстрацию и живопись.
            </p>
            <p className="text-lg">
              Мое искусство - это сочетание традиционных техник и современного видения, 
              отражающее сущность моды, красоты и человеческих эмоций. Каждая работа - 
              это свидетельство моего пути как художника и бесконечного увлечения силой 
              визуального повествования.
            </p>
            <p className="text-lg">
              Приглашаю вас исследовать мою галерею, где каждое произведение искусства - 
              это окно в мой творческий мир. Будь то смелые штрихи моих модных иллюстраций 
              или тонкие эмоции в портретах, я надеюсь, что мое искусство найдет отклик 
              в вашей душе и пробудит ваше воображение.
            </p>
            <div className="pt-4">
              <Link href="/Larisa_Guseva_Portfolio.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                  <FileDown className="mr-2 h-4 w-4" /> Скачать полное портфолио (PDF)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

