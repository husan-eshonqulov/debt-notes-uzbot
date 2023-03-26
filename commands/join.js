const { bot } = require('../core/bot');
const { messages } = require('../lib/message');
const Chat = require('../models/Chat');

bot.command('join', async (ctx) => {
  const newUser = { ...ctx.message.from };
  const newChat = { ...ctx.message.chat };

  let chat = await Chat.findOne({ id: newChat.id });

  if (!chat) {
    newChat.members = [newUser];
    console.log('newChat', newChat);
    chat = await Chat.create(newChat);
  } else {
  }

  console.log('chat', chat);
  ctx.reply(messages['join']);
});
