const { Client, Message, PermissionFlagsBits } = require("discord.js");

module.exports = {
  name: "ping",
  description: "xem ping của em",
  category: "🎀info",
  
  /**
   *
   * @param {Client} client
   * @param {Message} message
   */
  run: async (client, message) => {
    // code
    message.reply({
      content: `🏓Pong! ${client.ws.ping} ms`,
    });
  },
};