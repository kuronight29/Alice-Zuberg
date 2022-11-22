const { Client,GatewayIntentBits,Partials,Collection } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [
	GatewayIntentBits.DirectMessageReactions,
	GatewayIntentBits.DirectMessageTyping,
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.GuildBans,
	GatewayIntentBits.GuildEmojisAndStickers,
	GatewayIntentBits.GuildIntegrations,
	GatewayIntentBits.GuildInvites,
	GatewayIntentBits.GuildMembers,
	GatewayIntentBits.GuildMessageReactions,
	GatewayIntentBits.GuildMessageTyping,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.GuildPresences,
	GatewayIntentBits.GuildScheduledEvents,
	GatewayIntentBits.GuildVoiceStates,
	GatewayIntentBits.GuildWebhooks,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.MessageContent
],
	partials: [
		Partials.User,
		Partials.Channel,
		Partials.GuildMember,
		Partials.Message,
		Partials.Reaction,
		Partials.GuildScheduledEvent,
		Partials.ThreadMember
	]
 });

client.scommands = new Collection();
client.mcommands = new Collection();

module.exports = client;

["event_handler","slash_handler","cmd_handler"].forEach((file) => {
    require(`./handlers/${file}`)(client);
  });

client.login(token)

