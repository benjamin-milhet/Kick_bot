const Discord = require('discord.js')
const  bot = new Discord.Client()

const kick = require('./commands/kick')
const react = require('./commands/react')


class test {
    static getBot(){
        return bot;
    }

}

var fs = require('fs');
//Recupere les differents fichiers texte
const token = JSON.parse(fs.readFileSync('./token.json'));

/**
 * @author Orchanyne
 */
bot.on('ready', function () {
    //Action du bot lorsqu'il se connecte
    bot.user.setActivity("Throwing a flashbang !")

})

bot.on('message', function (message) {
    kick.parse(message)

})


bot.on('messageReactionAdd', (reaction, user) => {
  if (reaction.emoji.name === "✅" || reaction.emoji.name === "❌") {
    //console.log(reaction.message.content);
    react.parse(reaction.message);
  }
});

bot.on('voiceStateUpdate', (oldState, newState) => {
  var listPreBan = JSON.parse(fs.readFileSync('./commands/listPreBan.json'));
  for (var i = 0; i < listPreBan.length; ++i) {
    if (listPreBan[i] == oldState.member.user.id) {
      //console.log("eefhbvvnwvwkjnv");
      oldState.member.voice.kick("Ca bombarde a la P90");

    }
  }
});


bot.login(token)
