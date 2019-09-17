const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjE3ODQyMjIwNjQwNTAxNzkx.XWxAdw.nK-KUdrH4Mt7JRiVymLSsHQHIoc';

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
        

    }
})


bot.login(process.env.token);
