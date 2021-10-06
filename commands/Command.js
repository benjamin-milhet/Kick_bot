/**
 * Classe mere de mes commandes
 * @type {command}
 * @author Orchanyne
 */
module.exports = class Command{

    //Permet de verifier si la commande existe
    static parse(message){
        if (this.match(message)){
            this.action(message)
            return true
        }

        return false


    }


    static match(message){
        return false
    }

    //action que la commande doit realiser
    static action(message){}

}