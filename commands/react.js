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

    //PErmet de reagir en fonction des differentes reactions au message possible
    static action(message){
      let destinataire = message.guild.member(message.mentions.users.first());
      let reactions = message.reactions.cache;

      if (reactions.get("✅").count === 4) {
        destinataire.voice.kick("Ca bombarde a la P90");
        listPreBan.push(destinataire.id);
        fs.writeFileSync(('./commands/listPreBan.json'), JSON.stringify(listPreBan));

      }else if(reactions.get("❌")){
        if(reactions.get("❌").count === 4) return message.channel.send(`Le vote pour exclure ${destinataire.user} a echouer`);
      }
      
    }




}
