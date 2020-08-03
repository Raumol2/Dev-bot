const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'D!ping') {
    msg.reply('pong');
  }
});

const { Client, MessageAttachment } = require('discord.js');
client.on('message', message => {
  
  if (message.content === 'D!rip') {
    
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    
    message.channel.send(attachment);
  }
});


client.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('D!kick')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
       member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            
            message.reply(`Successfully kicked ${user.tag}`);
          })
          .catch(err => {
           
            message.reply('I was unable to kick the member');
            
            console.error(err);
          });
      } else {
        
        message.reply("That user isn't in this guild!");
      }
  } else {
    message.reply("You didn't mention the user to kick!");
  }
}
});

client.on('message', message => {
  
  if (!message.guild) return;

  if (message.content.startsWith('D!ban')) {
    
    const user = message.mentions.users.first();
  
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
        
    
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
           
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {
            
            message.reply('I was unable to ban the member');
            
            console.error(err);
          });
      } else {
        
        message.reply("That user isn't in this guild!");
      }
    } else {
      
      message.reply("You didn't mention the user to ban!");
    }
  }
});


 


client.login('')
