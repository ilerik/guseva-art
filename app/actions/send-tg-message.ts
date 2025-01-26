"use server"

import { Bot } from "grammy"
import dedent from "dedent"

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || 135379933

const bot = new Bot(TELEGRAM_BOT_TOKEN!)

export async function sendTelegramMessage(formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email") 
    const message = formData.get("message")

    const telegramMessage = dedent`
    New message from website:
    Name: ${name}
    Email: ${email}
    Message: ${message}
    `
    await bot.api.sendMessage(TELEGRAM_CHAT_ID, telegramMessage)

    return { success: true }
  } catch (error) {
    console.error("Error sending Telegram message:", error)
    return { error: "Failed to send message" }
  }
}
