"use server"

import { Resend } from "resend"
import WelcomeEmail from "../private/emails/welcome"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return {
        error: "Please fill in all fields",
      }
    }

    // Send welcome email to the user
    const { data, error } = await resend.emails.send({
      from: "Лариса Гусева <art@gusevalove.art>",
      to: [email],
      subject: "Добро пожаловать в галерею Ларисы Гусевой",
      react: WelcomeEmail({ name }) as React.ReactElement,
      attachments: [
        {
          filename: "Larisa_Guseva_Portfolio.pdf",
          path: "https://gusevalove.art/Larisa_Guseva_Portfolio.pdf",
        },
      ],
    })

    // Send notification email to admin
    // await resend.emails.send({
    //   from: "Contact Form <art@gusevalove.art>",
    //   to: "larisa@guseva.art",
    //   subject: "New Contact Form Submission",
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Message: ${message}
    //   `,
    // })

    if (error) throw(error);
    
    console.log('Success sending email:', data);

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      error: "Failed to send email. Please try again later.",
    }
  }
}

