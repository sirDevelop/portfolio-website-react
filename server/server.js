const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const TelegramBot = require("node-telegram-bot-api");
const cors = require('cors')

require("dotenv").config();

const net = require('net')
const server = net.createServer()
let port = 9000

server.once('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        port = port + 1
        server.listen(port)
    }
})
server.once('listening', function () { server.close() })
server.listen(port)
server.once('close', function () {
    const origins = [process.env.FRONTEND_URL]
    const app = express();
    app.use(cookieParser());

    app.use(
		cors({
			origin: origins,
			credentials: true,
		})
	)

    // Body Parse Middleware
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Create bot instance once, outside of request handler
    const bot = new TelegramBot(process.env.TELEGRAM_TOKEN_ID);

    app.get("/", (req, res) => {})

    app.post("/send", (req, res) => {
        try {
            const { name, subject, email, message } = req.body
            if (name && name.length && email && email.length && subject && subject.length && message && message.length) {

                // Use the single bot instance
                bot.sendMessage(process.env.CHAT_ID, `${name}\n${subject}\n${email}\n${message}`)
                res.cookie("messageSuccess", true)

                res.json({ heading: "Message Sent", message: "Thanks for your message! Looking forward to the opportunity to connect.", status: "success"})
            } else {
                res.json({heading: "Invalid Form", message: "Please fill out all of the fields.", status: "warning"})
            }

        } catch (error) {
            res.json({message: "Something went wrong", status: "danger"})
        }
    });
   
    port = process.env.PORT || port;
    app.listen(port, () =>
        console.log(`Server started. Listening at port ${port}`)
    );

})