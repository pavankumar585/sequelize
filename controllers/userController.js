const { User } = require("../models");

async function createUser(req, res) {
  try {
    const user = await User.create(req.body);

    res.json({ status: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.findAll({ include: "post" });
    
    res.json({ status: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

async function getUser(req, res) {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({ where: { uuid }, include: "post" });
    
    res.json({ status: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: error.message });
  }
}

module.exports = { createUser, getUsers, getUser };
