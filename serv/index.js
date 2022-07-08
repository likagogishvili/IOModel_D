var express = require("express");
var app = express();
var connection = require("./database");
var cors = require("cors");

app.use(cors());

app.get("/GamoshvebisMult", function (req, res) {
  let sql = "SELECT * FROM gamoshvebismultipikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/DamatebuliMult", function (req, res) {
  let sql = "SELECT * FROM damatebulimultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/DasaqmebisMult", function (req, res) {
  let sql = "SELECT * FROM dasaqmebismultiplikatori1";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/ImportisMult", function (req, res) {
  let sql = "SELECT * FROM importismultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});
app.get("/DziritadiKapitaliMult", function (req, res) {
  let sql = "SELECT * FROM dziritadikapitalimultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/ShromisAnazgaureba", function (req, res) {
  let sql = "SELECT * FROM shromismultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/MtlianiMultipikatorebi", function (req, res) {
  let sql = "SELECT * FROM mtlianimultiplikatorebi1";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/MimdinareGirebuleba", function (req, res) {
  let sql = "SELECT * FROM mimdinaregirebulebadzveli1";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.listen(4000, function () {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("database connected");
  });
});
