const Discord = require("discord.js");
require('dotenv').config();
const client = new Discord.Client();
const mongoose = require("mongoose")

const memberCounter = require('C:/Users/Jonas Forsberg/Desktop/Discordbot/counters/member-counter');


prefix = '?'

const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.once('ready', () => {
    memberCounter(client);
    

    const arrayOfStatus = [
        ` Over ${client.guilds.cache.size} servers!`,
        ` Using prefix ? `,
        ` Made by Jonas_#9733`,
        ` Make sure to join Tha BET https://discord.gg/VueJNuSXhY`,
        `?help`,
        `http://jonasnett.c1.biz/`


    ];
    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        client.user.setActivity(status, { type: "WATCHING"}).catch(console.error)
        index++;
    }, 15000) //in ms
   
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
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'meme') {
        client.commands.get('meme').execute(message, args);
    } 


  
});



client.login(process.env.DISCORD_TOKEN);
