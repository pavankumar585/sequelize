const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.route("/").get(postController.getPosts).post(postController.createPost);

router.route("/:uuid").get(postController.getPost);

module.exports = router;
