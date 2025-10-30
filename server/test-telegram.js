const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

async function testTelegramBot() {
    console.log("Testing Telegram Bot Configuration...\n");

    const token = process.env.TELEGRAM_TOKEN_ID;
    const chatId = process.env.CHAT_ID;

    console.log("Bot Token:", token ? `${token.substring(0, 10)}...` : "NOT FOUND");
    console.log("Chat ID:", chatId || "NOT FOUND");

    if (!token || !chatId) {
        console.error("\n❌ Missing credentials in .env file!");
        return;
    }

    try {
        // Create bot instance
        const bot = new TelegramBot(token);

        // Test 1: Get bot info
        console.log("\n1. Testing bot token validity...");
        const botInfo = await bot.getMe();
        console.log("✅ Bot token is valid!");
        console.log("   Bot username: @" + botInfo.username);
        console.log("   Bot name: " + botInfo.first_name);

        // Test 2: Send test message
        console.log("\n2. Testing message sending to chat ID...");
        const testMessage = `🧪 Test Message from Portfolio Website\n\nTime: ${new Date().toLocaleString()}\n\nIf you see this message, your Telegram integration is working correctly!`;

        await bot.sendMessage(chatId, testMessage);
        console.log("✅ Test message sent successfully!");
        console.log("\n🎉 All tests passed! Your Telegram bot configuration is working.");
        console.log("\nCheck your Telegram for the test message.");

    } catch (error) {
        console.error("\n❌ Error occurred:");

        if (error.response && error.response.statusCode === 401) {
            console.error("Invalid bot token! Please check your TELEGRAM_TOKEN_ID in .env file.");
        } else if (error.response && error.response.statusCode === 400) {
            console.error("Invalid chat ID or the bot doesn't have access to this chat!");
            console.error("\nTo fix this:");
            console.error("1. Make sure the chat ID is correct");
            console.error("2. Start a conversation with your bot by messaging it on Telegram");
            console.error("3. If it's a group chat, make sure the bot is added to the group");
        } else {
            console.error(error.message);
        }

        if (error.response && error.response.body) {
            console.error("\nAPI Error Details:", error.response.body.description);
        }
    }
}

// Run the test
testTelegramBot();