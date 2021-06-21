const Discord = require("discord.js");

module.exports = {
    name: "quotes",
    description: "Sends an epic meme",
    execute(client, message, cmd, args, Discord){

    if(!args[2]) return message.reply("Please ask a full question!");
            let replies = ['Because of your smile, you make life more beautiful. Thich Nhat Hanh',

            'Beauty in things exists in the mind which contemplates them. David Hume',
            
            'The seeds of beauty are in humility. Maxime Lagacé',
            
            'Everything has beauty, but not everyone sees it. Confucius',
            
            'The future belongs to those who believe in the beauty of their dreams. Eleanor Roosevelt',
            
            
            'You are imperfect, permanently and inevitably flawed. And you are beautiful. Amy Bloom',
            
            'Beauty begins the moment you decide to be yourself. Coco Chanel',
            
            'You may be one person to the world but you may also be the world to one person. Audrey Hepburn',
            
            'The best way to pay for a lovely moment is to enjoy it. Richard Bach',
            
            'Its just a bad day. Not a bad life. Unknown',
            'Whenever you are creating beauty around you, you are restoring your own soul. Alice Walker',
            
            'This is a wonderful day, I have never seen this one before. Maya Angelou',
            
            'Though we travel the world over to find the beautiful, we must carry it with us or we find it not. Ralph Waldo Emerson',
            
            'The most beautiful experience we can have is the mysterious – the fundamental emotion which stands at the cradle of true art and true science. Albert Einstein',
            
            'The roots of beauty are love and kindness, the fruits are meaning and purpose. Maxime Lagacé',
            
            
            'I dont think of all the misery but of the beauty that still remains. Anne Frank',
            'If the path be beautiful, let us not ask where it leads. Anatole France',
            'Beauty is a nectar which intoxicates the soul. T.C. Henley',
            'A morning-glory at my window satisfies me more than the metaphysics of books. Walt Whitman',
            'Beauty is not in the face; beauty is a light in the heart. Kahlil Gibran',
            'There is no perfection, only beautiful versions of brokenness. Shannon L. Alder',
            'Nothing makes a woman more beautiful than the belief that she is beautiful. Sophia Loren',
            'There is a road from the eye to the heart that does not go through the intellect. G.K. Chesterton',
            'Love of beauty is taste. The creation of beauty is art. Ralph Waldo Emerson',
            
            'Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing. Mother Teresa  ',
            'When was the last time you just closed your eyes and just listened? Maxime Lagacé',
            'Those who were seen dancing were thought to be insane by those who could not hear the music. Friedrich Nietzsche',
            'Have a heart that never hardens, and a temper that never tires, and a touch that never hurts. Charles Dickens',
            'Beauty is strangely various. There is the beauty of light and joy and strength exulting; but there is also the beauty of shade, of sorrow and sadness, and of humility oppressed. Arnold Bennett',
            
            'Ive never seen a smiling face that was not beautiful. Unknown',
            'Your happy ending may not be what you expect, but that is what will make it so special. Snow White (Once Upon a Time) ',
            'Outer beauty is a gift. Inner beauty is an accomplishment. Randi G. Fine',
            'Every saint has a past, and every sinner has a future. Oscar Wilde  ',
            'The soul that sees beauty may sometimes walk alone. Johann von Goethe',
            'Kindness is like snow – It beautifies everything it covers. Kahlil Gibran',
            'I dont like standard beauty – there is no beauty without strangeness. Karl Lagerfeld (Chanel) ',
            'To be beautiful means to be yourself. You dont need to be accepted by others. You need to accept yourself. Thich Nhat Hanh',
            
            
            'Beauty is the promise of happiness.',
            'Beauty is how you feel inside, and it reflects in your eyes. It is not something physical. Sophia Loren',
            'Wisdom is the abstract of the past, but beauty is the promise of the future. Oliver Wendell Holmes',
            'Beauty is visible music. T.C. Henley',
            'Beauty is mans voucher of immorality. T.C. Henley',
            'How wonderful it is that nobody need wait a single moment before starting to improve the world. Anne Frank',
            'Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. Samuel Beckett',
            'There is no torture that a woman would not endure to enhance her beauty. Michel de Montaigne'
             ]
             let result = Math.floor((Math.random() * replies.length));
             let question = args.slice(0).join(" ");

             let ballembed = new Discord.MessageEmbed()
             .setAuthor(message.author.tag)
             .setColor("#6800fb")
             .addField("Your daily quote", replies[result]);

             message.channel.send(ballembed)

        }

}

