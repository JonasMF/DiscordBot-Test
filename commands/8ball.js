const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    description: "Sends an epic meme",
    execute(client, message, cmd, args, Discord){

    if(!args[2]) return message.reply("Please ask a full question!");
            let replies = ['Yes', 'no', 'i dont know', 'Ask again later'];

             let result = Math.floor((Math.random() * replies.length));
             let question = args.slice(0).join(" ");

             let ballembed = new Discord.MessageEmbed()
             .setAuthor(message.author.tag)
             .setColor("#6800fb")
             .addField("Question", question)
             .addField("Your daily quote", replies[result]);

             message.channel.send(ballembed)

        }

}