const client = require("../index");
const { prefix } = require("../config");

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild) return;
  let args = message.content.slice(prefix.length).trim().split(/ +/);
  let cmd = args.shift()?.toLowerCase();
  const command = client.mcommands.get(cmd);
  if (!command) return;
  if (command) {
    if (
      command.userPermissions &&
      !message.member.permissions.has(command.userPermissions)
    ) {
      return message.reply({
        content: `bạn không có đủ quyền !!`,
      });
    } else if (
      command.botPermissions &&
      !message.guild.members.me.permissions.has(command.botPermissions)
    ) {
      return message.reply({
        content: `em không có đủ quyền !!`,
      });
    } else {
      command.run(client, message);
    }
  }
});