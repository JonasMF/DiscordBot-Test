module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    description: 'creates a suggestion!',
    execute(client, message, cmd, args, Discord){
    channel = '852949746917048360'
    

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
        .setColor('#6800fb')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        client.channels.cache.get('852949746917048360').send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}