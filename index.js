require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Connected as ${client.user.tag}`);
  console.log("Servers: ");
  client.guilds.cache.forEach((guild) => {
    console.log(` - ${guild.name}`);
    guild.channels.cache.forEach((channel) => {
      console.log(` -- ${channel.name} (${channel.type} - ${channel.id})`);
    });
  });
  const botsGeneral = client.channels.cache.get('769534520163958789') 
  botsGeneral.send("Hello, world!")
});

client.login(process.env.SECRET);
