const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.arcadia

const PREFIX = '!';

var version = '1.0.0';

bot.on('ready', () =>{
    console.log('Have no fear! Elijah is here!');
});

bot.on('message', message=>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong');
            break;
        case 'website':
            message.channel.sendMessage('idk we dont have a website');
            break;       
        case 'info':
            if(args[1] === 'owner'){
                message.channel.sendMessage('nAthan is the current owner of this server!');
            }else{
                message.channel.sendMessage('Invalid Args')
            }               
            break;

        case 'clear':
            if(!args[1]) return message.reply('Error please define second args!')
            message.channel.bulkDelete(args[1]);
            break;
        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player name', message.author.username, true)
            .addField('Version', version, true)
            .addField('Current Server', message.guild.name, true)
            .setColor(0xF36C8F)
            .setThumbnail(message.author.avatarURL)
            .setFooter('smirk')
            message.channel.sendEmbed(embed);
            break;
        case 'kick':
            if(!args[1]) messsage.channel.send('You need to specify a person!')
            
            const user = message.mentions.users.first();
            
            if(user){
                member.kick('You were kicked for trolling!').then(() =>{
                    message.reply(`Sucessfully kicked ${user.tag}`);
                }).catch(err =>{
                    message.reply('I was unable to kick that member');
                    console.log(err);
                });
            } else{
                message.reply("That user isn\'t in this server!")
            }
        } else {
            message.reply('that user isn\'t in this server!")
        }
                          
   break;
    }
                          
                          
})


bot.login(process.env.token);
