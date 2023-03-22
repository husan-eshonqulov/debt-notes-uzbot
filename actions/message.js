const { bot } = require('../core/bot');

const message = (ctx) => {
  const userId = ctx.from.id;

  console.log(ctx.message);
};

module.exports = { message };
