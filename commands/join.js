const { bot } = require('../core/bot');
const { joinChat } = require('../actions/joinChat');
const { joinUser } = require('../actions/joinUser');
const { addUserToChat } = require('../actions/addUserToChat');
const { messages } = require('../lib/message');

bot.command('join', async (ctx) => {
  const chat = await joinChat(ctx);
  const user = await joinUser(ctx);
  if (chat) {
    const isJoined = await addUserToChat(chat.id, user.id);
    ctx.reply(isJoined ? messages['join']['join'] : messages['join']['joined']);
  }
});
