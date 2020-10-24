require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const axios = require("axios");
const { prefix } = require("./config.json");

const giphyTranslateEndpoint = "https://api.giphy.com/v1/gifs/translate";

const getGif = async (query) => {
  const api_url = `${giphyTranslateEndpoint}?api_key=${process.env.GIPHY_KEY}&s=${query}`;
  const get = axios({ url: api_url, mode: "cors" });
  return get
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

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
  if (message.content.match(/bye/i)) {
    message.channel.send(
      "https://tenor.com/view/bye-slide-baby-later-peace-out-gif-12999722"
    );
  } else if (message.content.startsWith(`${prefix}gif`)) {
    const query = message.content.split(" ");
    const gif = getGif(query[1]);
    gif
      .then((gif) => {
        message.channel.send(gif.data.data.images.original.url);
      })
      .catch((error) => {
        message.channel.send(
          `Sorry, There was an error fetching gif\n${error}`
        );
      });
  } else if (message.content === `${prefix}server`) {
    message.channel.send(`This server's name is: ${message.guild.name}`);
  }
});

client.login(process.env.SECRET);
