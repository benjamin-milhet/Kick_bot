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

    if(message.client.user.id == bot.user.id){
        react.parse(message)

    }      

    

})


bot.login(token)
