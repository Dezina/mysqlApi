const express = require("express");
const bodyParser = require("body-parser");
const UserRoutes = require("./routes/user");
const mysqlConnection = require("./connection");
const cors = require("cors");

var app = express();
app.use(bodyParser.json());

app.use(cors());
app.use("/user", UserRoutes);



app.listen(5000);