module.exports = async (client) =>{
    const guild = client.guilds.cache.get('670977523315638278');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('855965333872574494');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 500000);
}
 