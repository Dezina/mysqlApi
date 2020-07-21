const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/allusers", (req, res) => {
    var select = "SELECT * from user";
    mysqlConnection.query(select, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});

Router.post("/login", (req, res) => {

    var user_email = req.body.user_email;
    var password = req.body.password;

    console.log(req.body);

    var select = "SELECT * from user";

    mysqlConnection.query(select, (err, rows, fields) => {
        if (!err) {
            if (user_email == req.body.user_email && password == req.body.password) {
                res.send(rows);
                //console.log('Logged in');
            }
            else {
                res.status(200).json({ message: 'Error: Please check the username & password..' });
            }
        }
        else {
            console.log(err);
        }
    })
});

Router.post("/adduser", (req, res) => {
    // var select = "INSERT INTO `service_desk`.`user` (`user_F_name`, `user_L_name`, `user_email`, `user_mobile`, `user_password`, `house_name`, `town`, `city`, `state`, `pincode`, `landmark`) VALUES ('dezina', 'pereira', 'd@gmail.com', '123', 'd123', 'h no. 98', 'goa', 'goa', 'goa', '403901', 'place');";

    var user_F_name = req.body.user_F_name;
    var user_L_name = req.body.user_L_name;
    var user_email = req.body.user_email;
    var user_mobile = req.body.user_mobile;
    var user_password = req.body.user_password;
    var house_name = req.body.house_name;
    var town = req.body.town;
    var city = req.body.city;
    var state = req.body.state;
    var pincode = req.body.pincode;
    var landmark = req.body.landmark;

    console.log(req.body);

    // connection.query("INSERT INTO user (Name, Email, Address, City, Country, password) VALUES", (name, email, address, city, country, password), function (err, result) {
    let insert = `INSERT INTO user(user_F_name, user_L_name, user_email, user_mobile, user_password, house_name, town, city, state, pincode, landmark) VALUES ( '${req.body.user_F_name}', '${req.body.user_L_name}', '${req.body.user_email}', '${req.body.user_mobile}', '${req.body.user_password}', '${req.body.house_name}', '${req.body.town}', '${req.body.city}', '${req.body.state}', '${req.body.pincode}', '${req.body.landmark}' )`;

    mysqlConnection.query(insert, (err, rows, fields) => {
        if (!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
});

module.exports = Router;