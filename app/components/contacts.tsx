import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Instagram, Send, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contacts() {
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
            href="mailto:larisa@guseva.art"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
            <span>larisa@guseva.art</span>
          </a>
          <a
            href="https://instagram.com/guseva_art"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>@guseva_art</span>
          </a>
          <a
            href="https://t.me/teleguseva"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Send className="h-5 w-5" />
            <span>@teleguseva</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Send me a message</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get in touch and receive a complimentary high-resolution portfolio!
          </p>
          <form className="space-y-4">
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
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}

