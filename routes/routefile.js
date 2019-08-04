const fs = require("fs");
const formidable = require("formidable");
const express = require("express");
const app = express();
const router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";
const dbName = "wrello";

router.post("/post-data", function(req, res) {
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    var obj = {
      db: db,
      body: req.body
    };
    insertData(obj, function() {
      /* var form = new formidable.IncomingForm();
      form.parse(req, function(err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = __dirname + files.filetoupload.name;
        console.log(newpath);
        fs.rename(oldpath, newpath, function(err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });*/
      client.close();
    });
  });
  res.send("Data uploaded successfully");
});

const insertData = function(obj, callback) {
  var body = obj.body;
  var db = obj.db;
  const collection = db.collection("documents");

  collection.insertOne(body, function(err, result) {
    return callback(result);
  });
};

module.exports = router;
