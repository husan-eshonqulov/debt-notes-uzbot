const { bot } = require('../core/bot');
const { joinChat } = require('../actions/joinChat');
const { joinUser } = require('../actions/joinUser');
const { addUserToChat } = require('../actions/addUserToChat');

bot.command('join', async (ctx) => {
  await joinChat(ctx);
  await joinUser(ctx);
  await addUserToChat(ctx);
});
