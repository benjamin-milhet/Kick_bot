const Command = require('./Command')
var fs = require('fs');
const { resolveAny } = require('dns');

let listPreBan = JSON.parse(fs.readFileSync('./commands/listPreBan.json'));

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
      let destinataire = message.guild.member(message.mentions.users.first());
      console.log(destinataire.id);

      listPreBan.push(""+destinataire.id)
      fs.writeFileSync(('./commands/listPreBan.json'), JSON.stringify(listeMomo))
      console.log(listPreBan);
      //listPreBan.push("0");



    }




}
