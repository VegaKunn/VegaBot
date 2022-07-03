const { player } = require(".");

module.exports = async (client, msg, args, command) => {
  if (command === "tocar" || command === "p" || command === "play") {
    const channel = msg.member.voice.channel;
    if (!channel)
      return msg.channel.send("Você precisa entrar no canal de voz!!!");

    const search_music = args.join(" ");
    if (!search_music)
      return msg.channel.send("Digite o nome ou link da musica!!!");

    const queue = player.createQueue(msg.guild.id, {
      metadata: {
        channel: msg.channel,
      },
    });

    try {
      if (!queue.connection) await queue.connect(channel);
    } catch (error) {
      queue.destroy();
      return await msg.reply({
        content: "Não foi possivel entrar no server!!",
        ephemeral: true,
      });
    }
    // queue.addTrack()
    const song = await player
      .search(search_music, {
        requestedBy: msg.author,
      })
      .then((x) => x.tracks);
    client.user.setActivity(song.title, { type: "LISTENING" });
    if (!song) return msg.reply(`Erro ao procurar música: ${search_music}!!!`);

    if (song.length <= 1 && !queue.playing) {
      queue.play(song[0]);
    } else if (!song.length <= 1) {
      queue.play(song[0]);
      song.shift();
      queue.addTracks(song);
    }
    if (queue.playing) {
      queue.addTracks(song);
    }

    console.log(song);
  }

  ////

  if (command === "vg") {
    const channel = msg.member.voice.channel;
    if (!channel)
      return msg.channel.send("Você precisa entrar no canal de voz!!!");

    const search_music =
      "https://youtube.com/playlist?list=PLaulxHyd86Wf4AnTP7mm5iOJeEeyU7Y9V";

    const queue = player.createQueue(msg.guild.id, {
      metadata: {
        channel: msg.channel,
      },
    });

    try {
      if (!queue.connection) await queue.connect(channel);
    } catch (error) {
      queue.destroy();
      return await msg.reply({
        content: "Não foi possivel entrar no server!!",
        ephemeral: true,
      });
    }
    // queue.addTrack()
    const song = await player
      .search(search_music, {
        requestedBy: msg.author,
      })
      .then((x) => x.tracks);
    client.user.setActivity(song.title, { type: "LISTENING" });
    if (!song) return msg.reply(`Erro ao procurar música: ${search_music}!!!`);

    if (song.length <= 1 && !queue.playing) {
      queue.play(song[0]);
    } else if (!song.length <= 1) {
      queue.play(song[0]);
      song.shift();
      queue.addTracks(song);
    }
    if (queue.playing) {
      queue.addTracks(song);
    }

    msg.channel.send({ content: `⏳ | Buscando... **${song.title}**!` });
  } else if (command === "skip") {
    const queue = player.getQueue(msg.guild.id);
    queue.skip();
    msg.channel.send(`Proxima música...`);
  } else if (command === "stop") {
    const queue = player.getQueue(msg.guild.id);
    queue.stop();
    msg.channel.send(`Pediu pra parar parouuu...`);
  } else if (command === "pause") {
    const queue = player.getQueue(msg.guild.id);
    queue.setPaused(true);
    msg.channel.send(`Pause...`);
  } else if (command === "resume") {
    const queue = player.getQueue(msg.guild.id);
    queue.setPaused(false);
    msg.channel.send(`Continuando a tocar...`);
  }
};

/**
 * 
 * command === "tocar" ||
  command === "p" ||
  command === "play" ||
 * 
 * 
 */
