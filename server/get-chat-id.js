const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

console.log("Starting Telegram Bot to get your chat ID...\n");

const token = process.env.TELEGRAM_TOKEN_ID;

if (!token) {
    console.error("❌ No bot token found in .env file!");
    process.exit(1);
}

// Create bot with polling to receive messages
const bot = new TelegramBot(token, { polling: true });

console.log("✅ Bot is running and listening for messages...");
console.log("\n📱 INSTRUCTIONS:");
console.log("1. Open Telegram on your phone or computer");
console.log("2. Search for your bot: @portfolio8989_bot");
console.log("3. Start a conversation with the bot (click 'Start' or send '/start')");
console.log("4. Send any message to the bot (like 'Hello')");
console.log("5. Your chat ID will appear here\n");
console.log("Waiting for messages... (Press Ctrl+C to stop)\n");

// Listen for any message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const firstName = msg.from.first_name || 'User';
    const username = msg.from.username ? `@${msg.from.username}` : 'No username';
    const messageText = msg.text;

    console.log("═══════════════════════════════════════");
    console.log("📨 New message received!");
    console.log(`From: ${firstName} (${username})`);
    console.log(`Message: "${messageText}"`);
    console.log(`\n🔑 YOUR CHAT ID: ${chatId}`);
    console.log("═══════════════════════════════════════\n");

    // Send confirmation back to user
    bot.sendMessage(chatId, `✅ Got it! Your chat ID is: ${chatId}\n\nYou can now use this chat ID in your portfolio website configuration.`);

    console.log("✅ Update your .env file with this chat ID:");
    console.log(`CHAT_ID="${chatId}"\n`);
});

bot.on('polling_error', (error) => {
    console.error('Polling error:', error);
});