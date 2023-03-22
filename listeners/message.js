const { bot } = require('../core/bot');
const { message } = require('../actions/message');

bot.on('message', message);
