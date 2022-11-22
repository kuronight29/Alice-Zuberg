const { InteractionType } = require("discord.js");
const client = require("../index");

client.on("interactionCreate", async (interaction) => {
  // code
  if (interaction.type == InteractionType.ApplicationCommand) {
    const command = client.scommands.get(interaction.commandName);
    if (!command) {
      return interaction.reply({
        content: `\`${interaction.commandName}\` không phải là lệnh hợp lệ !!`,
        ephemeral: true,
      });
    } else {
      if (
        command.userPermissions &&
        !interaction.member.permissions.has(command.userPermissions)
      ) {
        return interaction.reply({
          content: `bạn không có đủ quyền !!`,
          ephemeral : true
        });
      } else if (
        command.botPermissions &&
        !interaction.guild.members.me.permissions.has(command.botPermissions)
      ) {
        return interaction.reply({
          content: `em không có đủ quyền !!`,
          ephemeral : true
        });
      } else {
        command.run(client, interaction);
      }
    }
  }
});