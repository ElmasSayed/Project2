
var path = require("path");
var db = require("../models");
var helpers = require('handlebars-helpers')();
module.exports = function(app) {
	  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/login.html"));

});


app.post("/login", function(req, res) {
 console.log(req.body);
    // console.log(res);
    db.User.create({
      email_address: req.body.email_address,
      password: req.body.password,
      picture: req.body.picture 
    })
    .then(function() {
    res.redirect("/");
    
    });      


});







};	
