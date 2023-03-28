const User = require('../models/User');

const joinUser = async (ctx) => {
  const userId = ctx.message.from.id;
  try {
    let user = await User.findOne({ id: userId });
    if (!user) {
      user = await User.create({ id: userId });
    }
    return user;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { joinUser };
