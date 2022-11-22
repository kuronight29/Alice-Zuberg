const { SlashCommandBuilder } = require('discord.js');
const data = new SlashCommandBuilder()

module.exports = {
	name: "ping",
	description: "xem ping của em",
	category: "🎀info",
	/**
	 *
	 * @param {Client} client
	 * @param {Message} message
	 */
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Xem độ chậm trễ của bot'),
	run: async (client, interaction) => {
		await interaction.reply(`🏓Pong! ${client.ws.ping} ms`);
	}
};