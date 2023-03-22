const { Telegraf } = require('telegraf');

const { TOKEN } = require('../config');

const bot = new Telegraf(TOKEN);

bot.launch();

module.exports = { bot };
