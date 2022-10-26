const mysql = require("mysql2");

const pool = mysql.createPool({
  host: host,
  user: "root",
  database: "fer_db",
  password: password,
});