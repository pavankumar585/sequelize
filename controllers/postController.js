const { Post, User } = require("../models");

async function createPost(req, res) {
  try {
    const { title, body, userUuid } = req.body;

    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ title, body, userId: user.id });

    res.json({ status: true, post })
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll({ include: "user" });

    res.json({ status: true, posts })
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getPost(req, res) {
  const uuid = req.params.uuid;

  try {
    const post = await Post.findOne({ where: { uuid }, include: "user" });

    res.json({ status: true, post })
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

module.exports = { createPost, getPosts, getPost };