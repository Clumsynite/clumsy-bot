require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.once("ready", () => {
  console.log(`Connected as ${client.user.tag}`);
  console.log("Servers: ");
  client.guilds.cache.forEach((guild) => {
    console.log(` - ${guild.name}`);
    guild.channels.cache.forEach((channel) => {
      console.log(` -- ${channel.name} (${channel.type} - ${channel.id})`);
    });
  });
  // const botsGeneral = client.channels.cache.get("769534520163958789");
  // botsGeneral.send("I am back Online\nTalk to me");
});

client.on("message", (message) => {
  if (message.author == client.user) {
    return;
  }
  // message.channel.send(
  //   `Message Received: ${message.content}\nFrom: ${message.author.tag}`
  // );
  if (message.content == `${prefix}ping`) {
    message.channel.send("Pong");
  }
});
client.login(process.env.SECRET);
