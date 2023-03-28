const getWords = (msg) => {
  const text = msg.toLowerCase();
  const words = text.split(' ');
  return words;
};

const getCash = (words) => {
  const cash = words.filter((word) => !isNaN(word));
  const sum = cash.reduce((acc, cur) => acc + Number(cur), 0);
  return sum;
};

const getChatUsers = async (ctx, Chat) => {
  const chat = await Chat.findOne({ id: ctx.message.chat.id });
  const users = await chat.memberId.map(async (id) => {
    const user = await ctx.getChatMember(id);
    console.log(user);
    return user;
  });
  console.log(users);
  return users;
};

const getTagedUserId = (ctx, words) => {
  const tags = words.filter((word) => word[0] === '@');
  return tags;
};

module.exports = { getWords, getCash, getChatUsers, getTagedUserId };
