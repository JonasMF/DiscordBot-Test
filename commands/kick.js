module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(client, message, cmd, args, Discord){
        if(message.member.roles.cache.has('783392138082648115', '852949178598293554')){

        
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You coudn't kick that member!`); } 

        
    
        }
        else{
                message.channel.send('You cant kick pepole');
        }
    }
}