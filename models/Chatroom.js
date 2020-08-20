const mongoose = require("mongoose");

const chatroomSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    admin: {type: mongoose.Schema.ObjectId,ref: 'User',required: true},
});
module.exports = mongoose.model("Chatroom", chatroomSchema);
