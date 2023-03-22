const { bot } = require('../core/bot');
const { messages } = require('../lib/message');

bot.help((ctx) => ctx.reply(messages['help']));
