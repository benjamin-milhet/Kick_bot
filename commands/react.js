const Command = require('./Command')
var fs = require('fs');
const { resolveAny } = require('dns');


/**
 * Permet de spam un membre du serveur pour avoir quelque chose
 * @type {reactCommand}
 * @author Orchanyne
 */
module.exports = class reactCommand extends Command{

    static match(message){
        return message.content.startsWith('Voulez-vous exclure')
    }


    //Choisit random 5 messages depuis le fichier json a envoyer en dm a un membre du serveur
    static action(message){
            message.react("✅");
            message.react("❌");
        


    }




}