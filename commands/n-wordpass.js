module.exports = {
    name: 'n-word-pass',
    descripton: "this is a n-word-pass command!",
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6800fb')
        .setTitle('N WORD PASS')
        .setURL('')
        .setDescription('YOU JUST GOT THE N-WORD PASS')
      
        .setImage('https://steamuserimages-a.akamaihd.net/ugc/804367228679502295/AD1C7E51B3CD36B1507D9764ED9BFBC8AFC203F0/')
        .setFooter('Make sure to follow Discord rules https://discord.com/guidelines ')
        
            message.channel.send(newEmbed)



    }
}