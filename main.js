
const Discord = require('discord.js');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const client = new Discord.Client();



client.once('ready', () => {
    console.log('Samanalee is online!');
});

const PREFIX ='&';

var version = '1.0.0';
var owner = '!꧁WOℓfY꧂!#1873';
var help = 'help';

client.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.send('pong!');
        break;

        case 'help':
            const embed = new Discord.MessageEmbed()
            .setTitle('Command Lisat')
            .addField('cl', help)
              message.channel.sendEmbed(embed)
        break;    
    }
})

client.login('Nzc2NzM0Nzc1MTY2ODk0MTIx.X65MoQ.1oUHR3gxO6C0clylcYtfykAW2bQ')
