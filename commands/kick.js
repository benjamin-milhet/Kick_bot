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

    //Permet de proposer un vote pour exclure d'un salon vocal une personne pendant n temps
    static action(message){

        let destinataire = message.guild.member(message.mentions.users.first());

        let msgAll = message.content.split(" ")
        let nombre = msgAll[2]

            if (!destinataire) {
                return message.channel.send("L'utilisateur n'existe pas");
            } else {
                let url = 'https://tenor.com/view/cat-blind-flashbang-light-mode-gif-21281004';
                message.channel.send(url);
                var user = destinataire.id;
                message.channel.send(`Voulez-vous exclure <@${user}> du salon vocal ?`)
                .then(message => {
                    message.react("✅");
                    message.react("❌");

                });


            }
    }




}
