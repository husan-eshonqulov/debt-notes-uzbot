const { bot } = require('../core/bot');

const message = async (ctx) => {
  const userId = ctx.from.id;
  const members = await ctx.getChatMembersCount(userId);
  console.log(members);
};

module.exports = { message };
