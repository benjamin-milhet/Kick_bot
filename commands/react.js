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

      if (reactions.get("✅").count === 1) {
        destinataire.voice.kick("Ca bombarde a la P90");
        listPreBan.push(destinataire.id);
        fs.writeFileSync(('./commands/listPreBan.json'), JSON.stringify(listPreBan));

        //Reinitialiser la liste des ban apres 30sec
        let duration = 30; // todo: make this change based on user input
        let interval = setInterval(() => {
          duration--;
          //message.channel.send(duration --); // todo: make this look better lol
          if (duration == 0) {
            clearInterval(interval);
            listPreBan = [];
            fs.writeFileSync(('./commands/listPreBan.json'), JSON.stringify(listPreBan));
            message.channel.send("Tous les ban on ete reset");
          }
        }, 1000) // 1000 = 1 second


      }else if(reactions.get("❌")){
        if(reactions.get("❌").count === 4) return message.channel.send(`Le vote pour exclure ${destinataire.user} a echouer`);
      }

    }




}
