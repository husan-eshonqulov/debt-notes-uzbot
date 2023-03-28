const {
  getWords,
  getCash,
  getTagedUserId,
  getChatUsers,
} = require('../lib/helper');
const Chat = require('../models/Chat');

const message = async (ctx) => {
  const msg = ctx.message.text;
  const words = getWords(msg);
  const cash = getCash(words);
  const tags = getTagedUserId(ctx, words);
  const chatUsers = await getChatUsers(ctx, Chat);
};

module.exports = { message };
