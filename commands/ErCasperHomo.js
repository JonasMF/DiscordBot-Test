module.exports = {
    name: 'ercasperhomo',
    descripton: "This is er casper gay command",
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6800fb')
        .setTitle('Er casper homo?')
        .setURL('')
        .addFields(
            {name: 'Hvis du lurer på dette får du vell spøre selv da', value: 'Ring han TLF: 004792080393'},

        )
        .setImage('https://cdn.discordapp.com/attachments/829056628875067432/852926206529372170/image0.png')
        .setFooter('Make sure to follow Discord rules https://discord.com/guidelines ')
        
            message.channel.send(newEmbed)



    }
}