const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },

  is_bot: {
    type: Boolean,
    required: true,
  },

  first_name: {
    type: String,
    required: true,
  },

  last_name: String,
  language_code: String,
  is_premium: Boolean,
  added_to_attachment_menu: Boolean,
  can_join_groups: Boolean,
  can_read_all_group_messages: Boolean,
  supports_inline_queries: Boolean,
});

const ChatSchema = new mongoose.Schema({
  chatId: {
    type: Number,
    required: true,
  },

  member: {
    type: [MemberSchema],
    default: [],
  },
});

module.exports = mongoose.model('Chat', ChatSchema);
