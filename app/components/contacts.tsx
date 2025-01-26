"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { sendEmail } from "@/app/actions/send-email"
import Image from 'next/image'

import { YANDEX_METRIKA_KEY } from "@/app/constants/analytics";
import { sendTelegramMessage } from "@/app/actions/send-tg-message";

export function Contacts() {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    try {    
        const _result = await sendTelegramMessage(formData);
        const result = await sendEmail(formData)
        if (result.error) {        
        } else {        
            // Reset the form
            const form = document.querySelector("form") as HTMLFormElement
            form.reset()
        }
    } catch (error) {    
    } finally {
    setIsLoading(false)
    }
  }

  return (
    <Card className="mt-8" id="contacts">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Contact Me</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <p className="text-lg">
          I'd love to hear from you! Whether you're interested in purchasing a piece, commissioning work, or just want
          to chat about art, feel free to reach out through any of these channels:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="mailto:gusyani4@yandex.ru"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/socials/gmail-color.svg"
              width={24}
              height={24}
              alt="Personal Email Link"              
            />
            <span>gusyani4@yandex.ru</span>
          </a>
          <a
            href="https://instagram.com/guseva_art"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/socials/instagram-color.svg"
              width={24}
              height={24}
              alt="Personal Instagram Link"              
            />
            <span>@guseva_art</span>
          </a>
          <a
            href="https://t.me/gusevalove"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/socials/telegram-color.svg"
              width={24}
              height={24}
              alt="Personal Telegram Link"              
            />
            <span>@teleguseva</span>
          </a>
          <a
            href="https://wa.me/79512547535"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Image
              src="/socials/whatsapp-color.svg"
              width={24}
              height={24}
              alt="Personal WhatsApp Link"              
            />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Send me a message</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get in touch and receive a complimentary high-resolution portfolio!
          </p>
          <form action={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input type="text" id="name" name="name" required className="mt-1" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" name="email" required className="mt-1" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" name="message" rows={4} required className="mt-1" />
            </div>
            <Button type="submit" disabled={isLoading}
              onClick={() => {
                // @ts-expect-error
                ym(YANDEX_METRIKA_KEY, 'reachGoal', 'welcome_email');
                return true;
              }}>
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

