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
      /*let V = 0;//Valide
      let R = 0;//Refuse
      if (listPreBan[1] === 0) {
        V = listPreBan[1];
        R = listPreBan[2];
        if (listPreBan[3] === "Encours") {
          if (reaction.emoji.name === "✅") V++;
          else if(reaction.emoji.name === "❌") R++;
        }
      }
      listPreBan = [];
      listPreBan.push(""+destinataire.id)
      listPreBan.push(V);
      listPreBan.push(R);
      listPreBan.push("Encours");
      fs.writeFileSync(('./commands/listPreBan.json'), JSON.stringify(listPreBan))
      console.log(listPreBan);*/


      //listPreBan.push("0");



    }




}
