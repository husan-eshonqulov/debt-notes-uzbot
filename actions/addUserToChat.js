const Chat = require('../models/Chat');
const { messages } = require('../lib/message');

const addUserToChat = async (chatId, userId) => {
  let chat = await Chat.findOne({ id: chatId });
  if (!chat.memberId.includes(userId)) {
    chat = await Chat.updateOne(
      { id: chatId },
      { memberId: [...chat.memberId, userId] }
    );
    return true;
  } else {
    return false;
  }
};

module.exports = { addUserToChat };
