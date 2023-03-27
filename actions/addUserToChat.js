const Chat = require('../models/Chat');
const { messages } = require('../lib/message');

const addUserToChat = async (ctx) => {
  const chatId = ctx.message.chat.id;
  const userId = ctx.message.from.id;
  let chat = await Chat.findOne({ id: chatId });
  if (!chat.memberId.includes(userId)) {
    chat = await Chat.updateOne(
      { id: chatId },
      { memberId: [...chat.memberId, userId] }
    );
    return ctx.reply(messages['join']['join']);
  }
  ctx.reply(messages['join']['joined']);
};

module.exports = { addUserToChat };
