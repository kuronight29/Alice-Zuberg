const client = require("../index");
const ActivityType = require('discord.js');

client.on("ready", () => {
  console.log(`${client.user.username} đã kết nối!`);
  client.user.setPresence({
    activities: [{ name: `Kuro, I love you 💖💖`, type: ActivityType.Competing }],
    status: 'dnd',
    });
});