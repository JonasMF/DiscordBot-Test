module.exports = {
    name: 'ping',
    descripton: "this is a ping command!",
    execute(client, message, cmd, args, Discord){
        
            message.channel.send('Pong!')



    }
}