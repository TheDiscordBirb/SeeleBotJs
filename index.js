const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.once("ready", () => {
    console.log("Bot is ready");
})

client.on("messageCreate", msg => {
    msg.reply("Test complete");
})

client.login(process.env.TOKEN);