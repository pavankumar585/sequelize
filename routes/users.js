const express = require("express");
const router = express.Router();
const userControiller = require("../controllers/userController");

router.route("/")
.get(userControiller.getUsers)
.post(userControiller.createUser);

module.exports = router;
