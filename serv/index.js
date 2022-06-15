var express = require("express");
var app = express();
var connection = require("./database");
var cors = require("cors");

app.use(cors());

app.get("/GamoshvebisMult", function (req, res) {
  let sql = "SELECT * FROM GamoshvebisMultipikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/DamatebuliMult", function (req, res) {
  let sql = "SELECT * FROM DamatebuliMultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/DasaqmebisMult", function (req, res) {
  let sql = "SELECT * FROM DasaqmebisMultiplikatori1";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/ImportisMult", function (req, res) {
  let sql = "SELECT * FROM ImportisMultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});
app.get("/DziritadiKapitaliMult", function (req, res) {
  let sql = "SELECT * FROM DziritadiKapitaliMultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/ShromisAnazgaureba", function (req, res) {
  let sql = "SELECT * FROM ShromisMultiplikatori";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/MtlianiMultipikatorebi", function (req, res) {
  let sql = "SELECT * FROM MtlianiMultiplikatorebi1";
  connection.query(sql, function (err, results) {
    connection.query(sql, function (err, results) {
      if (err) throw err;
      res.send(results);
    });
  });
});

app.get("/MimdinareGirebuleba", function (req, res) {
  let sql = "SELECT * FROM MimdinareGirebulebaDzveli1";
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
