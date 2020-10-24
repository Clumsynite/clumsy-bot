const Discord = require('discord.js');
const client = new Discord.client()
require('dotenv').config();

client.on('ready', () => {
  console.log(`Connected as ${client.user.tag}`)
})

client.login(process.env.SECRET)
