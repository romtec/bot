const Discord = require("discord.js");

var bot = new Discord.Client()
var prefix = "d!"
var number_random = 0;
var party_launch = false


bot.on("ready", () => {
    bot.user.setGame({ game: {name: '|d!help|', type : 0}})
    console.log("Bot Ready !");
});

bot.login("Mzk0NTEwMDAwOTc5OTY4MDAx.DSFXlA.dp7JkFA1_JhPMkdqsZTWima3ysw")

bot.on('message', function(message){
    
if(message.content == prefix + "trouverlechiffre"){

    message.reply("La Partie Commence")

    party_launch = true

    number_random = Math.floor(Math.random() * (5000 - 0) + 0)

    console.log(number_random);

}

    if(message.content == prefix + "help"){

    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "help",
    description: "Aide",
    fields: [{
        name: "Fields",
        value: "They can have different fields with small headlines."
      },
      {
        name: "Masked links",
        value: "You can put [masked links](http://google.com) inside of rich embeds."
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
});
    
}

if(party_launch && message.content != null){

if(Number.isInteger(parseInt(message.content))){


    if(message.content > number_random){


    message.reply("Plus Petit")
    }
    else if(message.content < number_random){


       message.reply("Plus Grand")
   }
   else{

    message.reply("A Gagner La Partie")
    party_launch = false;

       }

    }

}

if(message.content == prefix + "stoptrouverlechiffre"){
    
    if(party_launch = true){

    message.reply("La Partie Est Arrêtée")

    party_launch = false;

}else{

    message.reply("Il N'y A Pas De Partie Lancée")

}

}

});


