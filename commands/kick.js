const Command = require('./Command')
var fs = require('fs');
const { resolveAny } = require('dns');


/**
 * Permet de spam un membre du serveur pour avoir quelque chose
 * @type {kickCommand}
 * @author Orchanyne
 */
module.exports = class kickCommand extends Command{

    static match(message){
        return message.content.startsWith('>k')
    }

    //Choisit random 5 messages depuis le fichier json a envoyer en dm a un membre du serveur
    static action(message){

        let destinataire = message.guild.member(message.mentions.users.first());

        let msgAll = message.content.split(" ")
        let nombre = msgAll[2]

       

  

            if (!destinataire) {
                return message.channel.send("L'utilisateur n'existe pas");
            } else {
                let url = 'https://tenor.com/view/cat-blind-flashbang-light-mode-gif-21281004';
                message.channel.send(url);
                message.channel.send("Voulez-vous exclure **" + destinataire.user.username + "** du salon vocal ?")
                .then(message => {
                    message.react("✅");
                    message.react("❌");
                    message.on('messageReactionAdd', (reaction, user) => {
                        // on vérifie que ce soit bien la bonne réaction et on ne compte pas celui du bot
                          /*if (reaction.emoji.name === TonEmoji && user.id !== bot.user.id) {*/
                              // ici tu ajoute ce que ton bot doit faire quand il y a la bonne réaction
                              console.log("test");
                          /*}*/
                        })
                });

                //Permet de chercher dans quelle salon vocale est la personne qui execute cette commande
                for (let i = 0; i<message.guild.channels.cache.filter(function (channel) {
                    return channel.type === 'voice'
                }).size; i++) {
                    if (message.guild.channels.cache.filter(function (channel) {
                        return channel.type === 'voice'
                    }).array()[i].members.array().includes(message.member)) {
                        let voiceChannel = message.guild.channels.cache.filter(function (channel) {
                            return channel.type === 'voice'
                        }).array()[i]
                        //-----------
                        voiceChannel.join().then(function (connection) {
                            connection.play('./son/sonnette.mp3')

                        })
                    }

                }
                for (let i = 0; i < nombre; i++) {
                    let r = Math.floor(Math.random() * listeMomo.length)

                    destinataire.createDM().then(function (channel) {
                        return channel.send(listeMomo[r])

                    }).catch(console.error)
                }
            }
    }




}