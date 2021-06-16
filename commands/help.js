module.exports = {
    name: 'hel',
    descripton: "this is a help command!",
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setcolor('#6800fb')
        .setTitle('Commands')
        .setURL('')
        .setDescription('This is the Embed for the the bots Commands')
        .addFields(
            {name: '?help'},
            {name: '?ercasperhomo'},
            {name: '?ping'},
            {name: '?youtube'},
        )
        .setImage('')
        .setFooter('Make sure to follow Discord rules https://discord.com/guidelines ')
        
            message.channel.send(newEmbed)



    }
}