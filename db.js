const Sequelize = require("sequelize");
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:events@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("\x1b[32m", "DB connected"))
  .catch(() => console.log("Error connecting DB"));

module.exports = db;
