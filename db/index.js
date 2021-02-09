const { Pool } = require("pg");
// const env = require("../env");

require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

module.exports = {
  query: (sql, value, cb) => {
    return pool.query(sql, value, cb);
  },
};
