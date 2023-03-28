const getHashtags = (msg) => {
  const hashtags = [];
  msg.entities.forEach((entity) => {
    if (entity.type === 'hashtag') {
      hashtags.push(
        msg.text.slice(entity.offset + 1, entity.offset + entity.length)
      );
    }
  });
  return hashtags;
};

const getTextMentionEntities = (entities) => {
  return entities.filter((entity) => entity.type === 'text_mention');
};

const getMentionEntities = (entities) => {
  return entities.filter((entity) => entity.type === 'mention');
};

const getTextMentionUserIds = (entities) => {
  return entities.map((entity) => entity.user.id);
};

const getMentionUserIds = (msg, entities) => {
  entities.map(entity);
};

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
  try {
    const chat = await Chat.findOne({ id: ctx.message.chat.id });
    const users = await Promise.all(
      chat.memberId.map((id) => ctx.getChatMember(id))
    );
    return users;
  } catch (err) {
    console.log(err);
  }
};

const getTextMentionIds = (entities) => {
  return entities.map((entity) => entity.user.id);
};

const noteDebt = (msg) => {
  const mentionedUserIds = getMentionedUserIds(msg);
};

const noteCredit = (msg) => {};

module.exports = {
  noteDebt,
  noteCredit,
  getHashtags,
  getWords,
  getCash,
  getChatUsers,
  getTextMentionIds,
};
