const { Post } = require("../models");

async function createPost(req, res) {
  try {
    const post = await Post.create(req.body);

    res.json({ status: true, post })
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getPosts(req, res) {
  try {
    const posts = await Post.findAll({});

    res.json({ status: true, posts })
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getPost(req, res) {
  const uuid = req.params.uuid;

  try {
    const post = await Post.findOne({ where: { uuid } });

    res.json({ status: true, post })
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

module.exports = { createPost, getPosts, getPost };