const express = require("express");
const app = express();
require("dotenv").config();

const todos = require("./routes/todos");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", todos);

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
