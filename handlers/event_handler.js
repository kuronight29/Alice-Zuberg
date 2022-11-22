const { Client } = require("discord.js");
const { readdirSync } = require("fs");

/**
 *
 * @param {Client} client
 */
module.exports = async (client) => {
  let eventCount = 0;
  readdirSync("./events")
    .filter((f) => f.endsWith(".js"))
    .forEach((event) => {
      require(`../events/${event}`);
      eventCount++;
      console.log(`✅ ${event} Event đã cập nhật`);
    });
};