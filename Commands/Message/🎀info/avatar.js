const { Client, Message } = require("discord.js");
const { EmbedBuilder, AttachmentBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    description: "Lấy avatar của người dùng discord bất kỳ",
    category: "🎀info",
  
    /**
     *
     * @param {Client} client
     * @param {Message} message
     */
    run: async (client, message) => {
      const user =  message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.member;
      await message.reply({
        embeds: [
            new EmbedBuilder()
               .setDescription(`Avatar của ${user.toString()}`)
               .setColor(0x0099FF)
               .setImage(`${user.displayAvatarURL({ dynamic: true})}`)
           ],
           ephemeral: false
      });
    },
  };