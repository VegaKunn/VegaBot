const { player } = require(".");

module.exports = async () => {
  player.on("trackStart", async (queue, track) => {
    queue.metadata.channel.send(`🎵 Tocando \`${track.title}\``);
    console.log(queue);
    console.log(track);
  });
  player.on("trackAdd", async (queue, track) => {
    //queue.metadata.channel.send(`🎵 Adicionando a playlist \`${track.title}\``);
  });
  player.on("trackEnd", async (queue, track) => {
    //  console.log(queue.tracks.length);
    //queue.metadata.channel.send(`🎵 Adicionando a playlist \`${track.title}\``);
  });
};
