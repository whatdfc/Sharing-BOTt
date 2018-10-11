const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم 
لو سمحت ممكن تدخل السيرفر؟
                              [ https://discord.gg/rn8wG5 ]
                              [ https://discord.gg/vKEehB ]
                              [ https://discord.gg/KgmCMM ]
الدعووة خاصة لك ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login("NDk0NjcxMDY5NTA0ODY0MjU2.Dp4PPw.4Ptv0gxnD-dB1DRwCbN3MluS3v8");