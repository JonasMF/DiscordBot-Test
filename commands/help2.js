module.exports = {
    name: 'help',
    descripton: "this is a help command!",
    execute(client, message, cmd, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6800fb')
        .setTitle('Standard Commands')
        .setURL('https://github.com/users/JonasMF/projects/2')
        .setAuthor('Made by Jonas', 'https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg', 'https://github.com/users/JonasMF/projects/2')
        .setDescription('All standard bot commands')
        .setThumbnail('https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg')
        .addFields(
            {name: '?help', value: 'Gets commands'},
            {name: '?ercasperhomo', value: 'Is casper bekker gay or not?'},
            {name: '?ping', value: 'Check if the bot is working'},
            {name: '?youtube', value: 'Suprise'},
            {name: '?n-word-pass', value: 'Gives you the n-word pass'},
            {name: '?suggestion [your suggestion]', value: 'Makes a suggestion'},
            {name: '?image [a key word to search for]', value: 'Gets the best image from google'},
            {name: '?mcserver [ip] [port]', value: 'get status of the server'}, )

        .setImage('')

        
        message.channel.send(newEmbed)

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor('#6800fb')
        .setTitle('Music Commands')
        .setURL('https://github.com/users/JonasMF/projects/2')
        .setAuthor('Made by Jonas', 'https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg', 'https://github.com/users/JonasMF/projects/2')
        .setDescription('All Music Commands')
        .setThumbnail('https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg')
        .addFields(
        

            {name: '?play [input]', value: 'search up song from youtube'},
            {name: '?leave', value: 'makes the bot leave the voice channel'},
            {name: '?fuckoff', value: 'makes the bot leave the voice channel'}
        )
        .setImage('')

        
            message.channel.send(newEmbed2)
        
        const newEmbed3 = new Discord.MessageEmbed()
        .setColor('#6800fb')
        .setTitle('Admin commands')
        .setURL('https://github.com/users/JonasMF/projects/2')
        .setAuthor('Made by Jonas', 'https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg', 'https://github.com/users/JonasMF/projects/2')
        .setDescription('All Admin Comands (work in progress)')
        .setThumbnail('https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg')
        .addFields(
        
            {name: '?warn', value: 'gives member a warn' },
            {name: '?ban', value: 'bans member'},
            {name: '?kick', value: 'kicks member'},
            {name: '?mute', value: 'mutes member'},
            {name: '?unmute', value: 'unmutes member'}

        )
        .setImage('')
        .setTimestamp()
        .setFooter('Made by Jonas. https://discord.com/guidelines', 'https://cdn.discordapp.com/attachments/572779056009969664/853009254376800296/ddpnnto-00cb3926-bc7e-451d-93f7-8944556a7aa0.jpg');

        
            message.channel.send(newEmbed3)



    }
}