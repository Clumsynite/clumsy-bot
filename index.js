require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.once("ready", () => {
  console.log(`Connected as ${client.user.tag}`);
  console.log("Servers: ");
  client.guilds.cache.forEach((guild) => {
    console.log(` - ${guild.name}`);
  });
});

client.on("message", (message) => {
  if (message.author == client.user) {
    return;
  }
  if (message.content == `${prefix}ping`) {
    message.channel.send("Pong");
  }
  if(message.content.match(/bye/i)){
    message.channel.send('https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722')
  }
});
client.login(process.env.SECRET);
