const { bot } = require('../core/bot');
const { leftChat } = require('../actions/leftChat');

bot.on('left_chat_member', leftChat);
