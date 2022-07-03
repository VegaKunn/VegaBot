require("dotenv").config();
const { Client } = require("discord.js");
const { Player } = require("discord-player");

const TOKEN = process.env.TOKEN;
const prefix = "#";
const client = new Client({
  restTimeOffset: 0,
  shards: "auto",
  intents: 641,
});

const player = new Player(client, {
  leaveOnEnd: true,
  leaveOnStop: true,
  leaveOnEmpty: true,
  leaveOnEmptyCooldown: 5000,
  autoSelfDeaf: true,
  initialVolume: 50,
  bufferingTimeout: 3000,
});

client.on("ready", () => {
  console.log("bot is already activated 🤖");
  client.user.setActivity("Your Song", { type: "LISTENING" });
});

module.exports = { player, client };
require("./envents")(client);

client.on("messageCreate", (msg) => {
  if (!msg.guild || msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  require("./commands")(client, msg, args, command);
});

client.on("messageCreate", (msg) => {
  // console.log(msg);
  let resEscrita = msg.content;
  if (
    msg.content == "oi" ||
    msg.content == "ola" ||
    msg.content == "olá" ||
    msg.content == "bom dia" ||
    msg.content == "boa tarde" ||
    msg.content == "boa noite" ||
    msg.content == "hallo" ||
    msg.content == "iae" ||
    msg.content == "eae"
  ) {
    // msg.channel.send(`${resEscrita} - #${msg.author.username}`); as duas fazem a mesma coisa
    msg.reply(`${resEscrita} - #${msg.author.username}`);
  }
});

//niver

client.on("messageCreate", (msg) => {
  let niverData = "-Aniversario";
  if (msg.content == "Vega" + niverData) {
    // msg.channel.send(`${resEscrita} - #${msg.author.username}`); as duas fazem a mesma coisa
    msg.channel.send(`O aniversario do Vega é dia 02/05`);
  }
  if (msg.content == "Douglas" + niverData) {
    // msg.channel.send(`${resEscrita} - #${msg.author.username}`); as duas fazem a mesma coisa   msg.reply
    msg.channel.send(`O aniversario do Douglas é dia 29/04`);
  }
});

client.on("messageCreate", (msg) => {
  if (msg.content == "VegaList") {
    msg.channel.send(
      `playlist do vega https://youtube.com/playlist?list=PLaulxHyd86Wf4AnTP7mm5iOJeEeyU7Y9V`
    );
  }
});

client.on("messageCreate", (msg) => {
  if (msg.content == "IgorList") {
    msg.channel.send(
      `playlist do igor https://www.youtube.com/playlist?list=PLjhz9m69bQXNNxmVrLJryTIPCukctAeVv`
    );
  }
});

client.on("messageCreate", (msg) => {
  if (msg.content == "DgList") {
    msg.channel.send(
      `play do douglas https://www.youtube.com/playlist?list=PL5lD7BIVbNMbCBn7Ajd2hfCtbnprAzso0`
    );
  }
});

client.on("messageCreate", (msg) => {
  if (msg.content == "kowalski relatório") {
    let dt = new Date();
    let horas = dt.getHours();
    if (horas >= 18 && horas <= 23) {
      msg.channel.send(
        `Previsões de merda essa noite, Capitão. Derrotas no lol e descepções amorosas`
      );
    }
    if (horas >= 0 && horas <= 5) {
      msg.channel.send(
        `Meu caro ${msg.author.username}, Nessa madrugada só nos resta lamentações, Capitão. É quando a saudade da morena bate mais forte`
      );
    }
    if (horas >= 6 && horas <= 12) {
      msg.channel.send(
        `Manhã agradavel, Tudo pode acontecer, quem dira o resultado de hoje é vc compeão, ${msg.author.username}`
      );
    }
    if (horas >= 13 && horas <= 18) {
      msg.channel.send(
        `Aguenta mais um pouco mermão, a noite já esta quase chegando`
      );
    }
  }
});

client.on("messageCreate", (msg) => {
  if (msg.content == "VegaBot/Analise") {
    let n1 = Math.floor(Math.random() * 6);
    if (n1 == 0) {
      msg.channel.send(`Concordo 400 Mil trilhoes %`);
    }
    if (n1 == 1) {
      msg.channel.send(`Discordo completamente!!`);
    }
    if (n1 == 2) {
      msg.channel.send(`Parece Fraude!?`);
    }
    if (n1 == 3) {
      msg.channel.send(`Duvidoso U.u`);
    }
    if (n1 == 4) {
      msg.channel.send(`Parece Veridico`);
    }
    if (n1 == 5) {
      msg.channel.send(`Meu filho, isso só Deus sabe :v`);
    }
  }
});

client.on("messageCreate", (msg) => {
  if (msg.content == "#comandos") {
    msg.channel.send(`#play, #p, #tocar == tocar musica  `);
    msg.channel.send(`#skip == pular musica`);
    msg.channel.send(`#stop == derrubar Bot :(`);
    msg.channel.send(`#pause == parar musica`);
    msg.channel.send(`#resume == continuar musica`);
    msg.channel.send(`VegaList, IgorList, DgList == lista pronta`);
    msg.channel.send(`#Nome Maiusculo -Aniversaro,  == data`);
    msg.channel.send(`kowalski relatório == Relatorio`);
    msg.channel.send(`VegaBot/Analise == Analise`);
    msg.channel.send(`Bagre + espaço + Cumprimento == Saudaçoes aquaticas`);
  }
});

client.login(TOKEN);
