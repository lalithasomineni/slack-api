const mongoose = require("mongoose");
const Chatroom = mongoose.model("Chatroom");
const User = require("../models/User");

exports.createChatroom = async (req, res) => {
  const { name } = req.body;

  const nameRegex = /^[A-Za-z\s]+$/;

  if (!nameRegex.test(name)) throw "Chatroom name can contain only alphabets.";

  const chatroomExists = await Chatroom.findOne({ name });

  if (chatroomExists) throw "Chatroom with that name already exists!";

  const chatroom = new Chatroom({
    name: req.body.name,
    admin: req.params.userId
  });

  await chatroom.save()
  .then(result=>{
    res.json({"result": result})
  }).catch(err=>{
    console.log(err)
  })
};

exports.getAllChatrooms = async (req, res) => {
  const chatrooms = await Chatroom.find({});

  res.json(chatrooms);
};
