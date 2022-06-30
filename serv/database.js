var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "",
  database: "IOModelD",
  user: "root",
  password: "Likagogishvili12@",
});

module.exports = connection;
