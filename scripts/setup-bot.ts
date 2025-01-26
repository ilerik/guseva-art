const { Bot } = require("grammy");
const dotenv = require("dotenv");

dotenv.config();

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not defined in environment variables");
}

async function setupBot() {
  try {
    const bot = new Bot(BOT_TOKEN!);
    
    const privacyPolicy = `Политика конфиденциальности бота Ларисы Гусевой

1. Собираемые данные
- Ваш Telegram ID
- История взаимодействий с ботом
- Предпочтения по искусству, которыми вы делитесь

2. Использование данных
- Для персонализации контента
- Для информирования о новых работах и выставках
- Для улучшения качества обслуживания

3. Защита данных
- Мы не передаем ваши данные третьим лицам
- Данные хранятся в зашифрованном виде
- Вы можете запросить удаление своих данных

4. Ваши права
- Просмотр собранных о вас данных
- Исправление неточной информации
- Удаление данных по запросу
- Отказ от рассылок

5. Контакты
По вопросам конфиденциальности пишите: @LarisaGuseva

Последнее обновление: ${new Date().toLocaleDateString('ru-RU')}`;
    
    // Bot information to set
    const botInfo = {
      description: "Приветствую! Я виртуальный ассистент художника Ларисы Гусевой. Помогу вам узнать больше о её творчестве, выставках и мастер-классах. Могу рассказать о доступных работах, ответить на вопросы о технике живописи и поделиться историями создания картин.",
      short_description: "Арт-ассистент Ларисы Гусевой",
      about: "Я представляю творчество художника Ларисы Гусевой. Помогаю коллекционерам и ценителям искусства узнавать о новых работах, выставках и событиях. Отвечаю на вопросы о картинах, творческом процессе и возможности приобретения работ.",
      commands: [
        { command: "start", description: "Начать общение" },
        { command: "help", description: "Показать все возможности" },
        { command: "portfolio", description: "Посмотреть работы" },
        { command: "exhibitions", description: "Актуальные выставки" },
        { command: "contact", description: "Связаться с художником" },
        { command: "about", description: "О Ларисе Гусевой" },
        { command: "privacy", description: "Политика конфиденциальности" }
      ],
    };

    // Set bot commands
    await bot.api.setMyCommands(botInfo.commands);

    // Set bot description
    await bot.api.setMyDescription(botInfo.description);
    
    // Set bot short description
    await bot.api.setMyShortDescription(botInfo.short_description);
    
    // Set bot about information
    await bot.api.setMyDescription(botInfo.about);

    // Set privacy policy
    try {
      await bot.api.setCustomEmojiStickerSetThumbnail({ name: "privacy_policy", custom_emoji_id: privacyPolicy });
      console.log("✅ Privacy policy set successfully!");
    } catch (error) {
      console.warn("⚠️ Could not set privacy policy as custom emoji. This is normal if the bot doesn't have a custom emoji feature.");
    }

    // Set bot profile photo (optional)
    // Uncomment and modify path if you want to set a profile photo
    
    // const fs = require('fs').promises;
    // const photoPath = "./assets/bot-avatar.jpg";
    // const photo = await fs.readFile(photoPath);
    // await bot.api.setProfilePhoto({ photo });     

    console.log("✅ Bot settings updated successfully!");
  } catch (error) {
    console.error("❌ Error setting up bot:", error);
    process.exit(1);
  }
}

// Run the setup
setupBot(); 