const { SlashCommandBuilder } = require('discord.js');
const { ApplicationCommandType, Client, CommandInteraction } = require("discord.js");
const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	name: "avatar",
	description: "lấy avatar của một người bất kỳ",
	category: "🎀info",
	type: ApplicationCommandType.ChatInput,
	/**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   */
	 data: new SlashCommandBuilder()
	 .setName('avatar')
	 .setDescription('Lấy URL hình đại diện của người dùng đã chọn hoặc hình đại diện của chính bạn.')
	 .addUserOption(option => option.setName('target').setDescription('Lấy avatar của ai')),
	 run: async (client, interaction) => {
		const user = interaction.options.getUser('target');
		if (!user) return interaction.reply("Bạn chưa chọn người để lấy avatar");
		await interaction.reply({
            embeds: [
             new EmbedBuilder()
                .setDescription(`Avatar của ${user.toString()}`)
                .setColor(0x0099FF)
                .setImage(`${user.displayAvatarURL({ dynamic: true})}`)
            ],
            ephemeral: false
        })
 }
};
