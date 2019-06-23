const Discord = require('discord.js');
const ticket = require('./Data/tickets.json');
const client = new Discord.Client({disableEveryone: true});
const config = require('./Data/config.json')
const prefix = "_";
const fs = require('fs');
const dateFormat = require('dateformat');
const setc = {}
const setrole = {}

client.on('ready',  () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[═════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log(`Informations About ${client.user.username}:`)
  console.log('')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log(`Arch! [ " ${process.arch} " ]`);
  console.log(`Platform! [ " ${process.platform} " ]`);
  console.log(`Node Version! [ " ${process.version}" ]`);
  console.log(`Prefix! [ " ${prefix}" ]`);
  console.log(`Language! [ " NodeJS " ]`);
  console.log(`Ram Usage! [ " ${(process.memoryUsage().rss / 1048576).toFixed()}MB " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(`${client.user.username} Is Online`)
  console.log('╚[════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log('Created By: Revenge')
console.log('╚[════════════]╝')
client.user.setGame(`Ticktey Bot Pro Edition`,'https://www.twitch.tv/Tickteybot');	
});

function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }

client.on("message", async message => {
		 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
	if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
		const category = setc[message.guild.id].category
		let newcategory = message.content.split(' ').slice(1).join(' ');
		let thiscategory = message.guild.channels.find('name', newcategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor("22BF41");
	if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor("22BF41");
	if(!newcategory) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${newcategory}\`\``)  
     .setColor("22BF41");
		if(!thiscategory) return message.channel.send(CANT);
	  setc[message.guild.id].category = newcategory	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets category has been set to \`\`${newcategory}\`\``)  
     .setColor("22BF41");
	message.channel.send(D1);//d1 = done 
		
	}
});


client.on("message", async message => {
		 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
  if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
	if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
		const role = setrole[message.guild.id].role
		let newrole = message.content.split(' ').slice(1).join(' ');
		let thisrole = message.guild.roles.find('name', newrole);
		let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
		 const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor("22BF41");
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor("22BF41");
	if(!newrole) return message.channel.send(NOTX1);
		  const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this role \`\`${newrole}\`\``)  
     .setColor("22BF41");
		if(!thisrole) return message.channel.send(CANT);
	  setrole[message.guild.id].role = newrole	
		  const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor("22BF41");
	message.channel.send(D1);
		
	}
});

client.on("message", async message => {
	 const nos = new Discord.RichEmbed()
     .setDescription(`:x: This command only for servers`)
     .setColor("22BF41");
  if(!message.channel.guild) return message.channel.send(nos).then(m => m.delete(5000));
  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' '); 
   let ticketnumber = 0000;
	if(!subject[0]){
            ticketnumber++;
			     const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor("22BF41");		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
		ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
	
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , `No subject has been given`)
     .setColor("22BF41")
     .setFooter(`Ticktey Pro` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	}
	
 if(subject[0]){
            ticketnumber++;
 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor("22BF41");		    
        if (!thisrole) return message.channel.send(rerole);
	          const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        if (message.guild.channels.exists("name", "ticket-" + ticketnumber)) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket-")) return message.channel.send(already);
	if (message.guild.channels.exists("name", "ticket")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-")) return message.channel.send(already);
	if (message.channel.name.startsWith("ticket-" + ticketnumber)) return message.channel.send(already);
        message.guild.createChannel(`ticket-${ticketnumber}`, "text").then(ticketx => {
	       ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true

            }); 
		
	    const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor("22BF41")
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`) 
     .addField('Subject' , subject)
     .setColor("22BF41")
     .setFooter(`Ticktey Pro` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);

	  }  
}


if(message.content.toLowerCase().startsWith(prefix + `close`)) {	
	 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
	let team = message.member.roles.find("name", `${setrole[message.guild.id].role}`);
	 const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor("22BF41");
	if(!team) return message.channel.send(d11x1xx);
		 const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor("22BF41");
	if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
	 const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor("22BF41");

    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        }) 
       .catch(() => {
	      const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor("22BF41");
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
  
});

  
client.on('message', message => {
if(message.content === `${prefix}help`)	{
let helpembed = new Discord.RichEmbed()
.setTitle('My Help List:')
.addField(`${prefix}new`, `To Create A New Ticket`)
.addField(`${prefix}close`, `To Close The Ticket`)
.addField(`${prefix}setcategory`, `To Set The Tickets Category`)
.addField(`${prefix}setrole`, `To Set The Staff Role`)
.addField(`${prefix}help`, `To See This List`)
.addField(`${prefix}botinfo`, `To See The Bot Informations`)
.addField(`${prefix}serverinfo`, `To See The Server Informations`)
.setColor('GREEN')
message.channel.sendEmbed(helpembed)
}})


  client.on('message', message => {
  if (message.content.startsWith(`${prefix}botinfo`)) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(client.user.username,client.user.avatarURL)
     .setThumbnail(client.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``Informations About Ticktey Pro Bot``')
            .addField('**My Ping**' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true) 
            .addField('**RAM Usage**', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true) 
            .addField('**Servers**', [client.guilds.size], true) 
            .addField('**Channels**' , `[ ${client.channels.size} ]` , true) 
            .addField('**Users**' ,`[ ${client.users.size} ]` , true) 
            .addField('**My Name**' , `[ ${client.user.tag} ]` , true) 
            .addField('**My ID**' , `[ ${client.user.id} ]` , true) 
            .addField('**DiscordJS**' , `[ ${Discord.version} ]` , true) 
            .addField('**NodeJS**' , `[ ${process.version} ]` , true) 
            .addField('**Arch**' , `[ ${process.arch} ]` , true) 
            .addField('**Platform**' , `[ ${process.platform} ]` , true) 
                  .addField('**My Prefix**' , `[ ${prefix} ]` , true) 
                  .addField('**My Language**' , `[ JavaScript | Node.js ]` , true) 
 
  })
  }
});

client.on('message', message => {
if(message.content.startsWith(prefix + "serverinfo")) { // الامر
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** ❎ `)
if(!message.channel.guild) return message.reply(' ');
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
const days = millis / 1000 / 60 / 60 / 24;
let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
var embed  = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField("**🆔 Server ID:**", message.guild.id,true)
.addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
.addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
.addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
.addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
.addField("**🌍 Others **" , message.guild.region,true)
.addField("**🔐 Roles **",`**[${message.guild.roles.size}]** Role `,true)
.setColor('#000000')
message.channel.sendEmbed(embed)

}
});

var adminprefix = "_";
const devs = ['461468630773661699','466734861558743041'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
	
     if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});//Toxic Codes
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)//Toxic Codes
  } else
     
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
	if (message.content.startsWith(adminprefix + 'sett')) {
  client.user.setGame(argresult, "https://www.twitch.tv/abdoufersaoui_dz");
    message.channel.sendMessage(`تم تغيير تويتش البوت إلى  ${argresult}`)
	}
});


client.login(process.env.BOT_TOKEN);
