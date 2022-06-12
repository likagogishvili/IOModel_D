var express = require("express");
var app = express();
var connection = require("./database");
var cors = require('cors')

app.use(cors())

app.get("/GamoshvebisMult", function (req, res) {
  let sql = "SELECT * FROM GamoshvebisMult";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/DamatebuliMult", function (req, res) {
  let sql = "SELECT * FROM DamatebuliMult";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/DasaqmebisMult", function (req, res) {
  let sql = "SELECT * FROM DasaqmebisMult";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/ImportisMult", function (req, res) {
  let sql = "SELECT * FROM ImportisMult";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});
app.get("/DziritadiKapitaliMult", function (req, res) {
  let sql = "SELECT * FROM DziritadiKapitaliMult";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/ShromisAnazgaureba", function (req, res) {
  let sql = "SELECT * FROM ShromisAnazgaureba";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/MtlianiMultipikatorebi", function (req, res) {
  let sql = "SELECT * FROM MtlianiMultipikatorebi";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/MimdinareGirebuleba", function (req, res) {
  let sql = "SELECT * FROM MimdinareGirebuleba";
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
