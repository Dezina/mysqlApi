const mysql = require("mysql");

var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "service_desk",
    multipleStatements: true
});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected to database..");
    }
    else {
        console.log("Connection failed..");
    }
});

module.exports = mysqlConnection;