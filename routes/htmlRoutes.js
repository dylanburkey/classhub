var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUsers
      });
    });
  });

  // Load user page and pass in an user by id
  app.get("/user/:id", function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.render("user", {
        user: dbUser
      });
    });
  });
  
  //after login 
  app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);

  // Load example page and pass in an example by id
  app.get("/login/:id", function (req, res) {
    db.dbSignUp.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbSignUp) {
      res.render("login", {
        example: dbSignUp
      });
    });
  });

  // Load posts page
  app.get("/posts", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUsers
      });
    });
  });

  // Load users page
  app.get("/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("index", {
        msg: "Welcome!",
        users: dbUsers
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
