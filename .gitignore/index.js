const Discord = require("discord.js");

var bot = new Discord.Client()

bot.on("ready", () => {
    bot.user.setPresence({ game: {name: '|d!help|', type : 0}})
    console.log("Bot Ready !");
});

bot.login("Mzk0NTEwMDAwOTc5OTY4MDAx.DSFXlA.dp7JkFA1_JhPMkdqsZTWima3ysw")
