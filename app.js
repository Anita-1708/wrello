const express = require("express");
const routefile = require("./routes/routefile");
const path = require("path");
const bodyparser = require("body-parser");
var app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.resolve(__dirname, "views")));
app.use("/", routefile);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0");
