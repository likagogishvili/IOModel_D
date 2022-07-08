var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "",
  database: "iomodeld",
  user: "root",
  password: "Likagogishvili1@",
});

module.exports = connection;
