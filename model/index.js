const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("DB connected..."))
  .catch((err) => console.log(err));

const db = {};

db.sequelize = sequelize;
db.Product = require("./product")(sequelize, DataTypes);
db.Review = require("./review")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => console.log("Sync done!"))
  .catch((err) => console.log(err));

module.exports = db;
