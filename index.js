require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Connected as ${client.user.tag}`);
});

client.login(process.env.SECRET);
