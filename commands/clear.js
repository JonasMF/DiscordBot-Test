module.exports = {
    name: 'clear',
    description: 'clears messages!',
    execute(message, args) {
        if(!args[0]) return message.reply("please enter the ammount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number!")

        if(args[0] > 100) return message.reply("You canno't delete more than 100 messages!");
        if(args[0] < 1) return message.reply("you must delete atleast one message!")
    }
}