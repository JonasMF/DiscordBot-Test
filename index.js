const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client();

prefix = '?'

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () => {
    client.user.setActivity('Using prefix ? Made by Jonas');
});

client.on('guildMemberAdd', member =>{

    const embed = new Discord.MessageEmbed()
    .setColor('#6800fb')
    .setDescription(`Welcome to the server, ${member} `);


    client.channels.cache.get('670977538222456842').send (embed) 
        
    
})

client.on('guildMemberRemove', member =>{

    const embed = new Discord.MessageEmbed()
    .setColor('#6800fb')
    .setDescription(`Good bye, ${member} `);


    client.channels.cache.get('670977538222456842').send (embed) 
        
    
})

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'suggest') {
        client.commands.get('suggestions').execute(client, message, cmd, args, Discord);
    } else if (command === 'play') {
        client.commands.get('play').execute(message, args);
    } else if (command === 'leave') {
        client.commands.get('leave').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'fuckoff') {
        client.commands.get('leave').execute(message, args);
    }


  
});



client.login(process.env.DISCORD_TOKEN);
