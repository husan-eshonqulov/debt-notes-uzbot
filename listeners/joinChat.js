const { bot } = require('../core/bot');
const { joinChat } = require('../actions/joinChat');

bot.on('new_chat_member', joinChat);
