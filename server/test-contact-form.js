const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

async function testContactForm() {
    console.log("Testing Contact Form Telegram Integration...\n");

    const token = process.env.TELEGRAM_TOKEN_ID;
    const chatId = process.env.CHAT_ID;

    if (!token || !chatId) {
        console.error("❌ Missing credentials in .env file!");
        return;
    }

    try {
        // Create bot instance WITHOUT polling to avoid conflicts
        const bot = new TelegramBot(token);

        // Simulate a contact form submission
        const formData = {
            name: "Test User",
            subject: "Test Subject",
            email: "test@example.com",
            message: "This is a test message from the contact form"
        };

        // Format message like the server does
        const messageText = `${formData.name}\n${formData.subject}\n${formData.email}\n${formData.message}`;

        console.log("Sending test message...");
        console.log("Message content:");
        console.log("================");
        console.log(messageText);
        console.log("================\n");

        // Send message
        const result = await bot.sendMessage(chatId, messageText);

        console.log("✅ Message sent successfully!");
        console.log("Message ID:", result.message_id);
        console.log("\nCheck your Telegram - the message should stay there permanently.");
        console.log("If the message disappears, it might be due to:");
        console.log("1. Another bot instance with polling enabled");
        console.log("2. Telegram bot settings or permissions");

    } catch (error) {
        console.error("❌ Error occurred:", error.message);
        if (error.response && error.response.body) {
            console.error("API Error:", error.response.body.description);
        }
    }
}

testContactForm();