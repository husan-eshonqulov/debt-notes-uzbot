const { bot } = require('../core/bot');
const { messages } = require('../lib/message');

bot.start((ctx) => ctx.reply(messages['start']));
