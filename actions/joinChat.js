const Chat = require('../models/Chat');

const joinChat = async (ctx) => {
  const chatInfo = ctx.message.chat;
  const chatId = ctx.message.chat.id;
  if (chatInfo.type !== 'group' && chatInfo.type !== 'supergroup') return;
  try {
    let chat = await Chat.findOne({ id: chatId });
    if (!chat) {
      chat = await Chat.create({ id: chatId });
    }
    return chat;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { joinChat };
