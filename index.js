const express = require("express");
const app = express();
require("dotenv").config();
const { sequelize } = require("./models");
const error = require("./middleware/error");
const users = require("./routes/users");
const posts = require("./routes/posts");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", users);
app.use("/api/posts", posts);
app.use(error);

const port = process.env.PORT || 9000;
app.listen(port, async (req, res) => {
  try {
    console.log(`Server is running on port ${port}`);

    await sequelize.authenticate();
    console.log("Database connection established");
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
