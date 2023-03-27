const Chat = require('../models/Chat');

const joinChat = async (ctx) => {
  const chatId = ctx.message.chat.id;
  try {
    let chat = await Chat.findOne({ id: chatId });
    if (!chat) {
      chat = await Chat.create({ id: chatId });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { joinChat };
