const { getHashtags, noteDebt, noteCredit } = require('../lib/helper');

const message = async (ctx) => {
  const msg = ctx.message;
  // console.log(ctx.getChatMember('husan_eshonqulov'));
  const hashtags = getHashtags(msg);
  if (hashtags.includes('debt') && !hashtags.includes('credit')) {
    noteDebt(msg);
  } else if (hashtags.includes('credit') && !hashtags.includes('debt')) {
    noteCredit(msg);
  }
};

module.exports = { message };
