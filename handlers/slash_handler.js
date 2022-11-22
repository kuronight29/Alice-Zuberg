const { Client } = require("discord.js");
const { guildId } = require('../config.json');
const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  try {
    let allCommands = [];
    readdirSync("./Commands/Slash").forEach((dir) => {
      const commands = readdirSync(`./Commands/Slash/${dir}`).filter((f) =>
        f.endsWith(".js")
      );

      for (const cmd of commands) {
        const command = require(`../Commands/Slash/${dir}/${cmd}`);
        if (command.name) {
          client.scommands.set(command.name, command);
          allCommands.push(command);
        } else {
          console.log(`❌ ${cmd} lỗi không thể nhận`);
        }
      }
    });
    console.log(`✅ ${client.scommands.size} lệnh slash đã cập nhật`);

    client.on("ready", async () => {
      // client.application.commands.set(allCommands);
      client.guilds.cache.get(guildId).commands.set(allCommands);
    });
  } catch (error) {
    console.log(error);
  }
};