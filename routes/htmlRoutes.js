var db = require("../models");
var passport = require ("passport");
var LocalStrategy = require('passport-local').Strategy;

module.exports = function (app, passport) {
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
      res.render("partials/content", {
        users: dbUsers
      });
    });
  });

  app.get("/courses", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("index", {
        msg: "Here are all the courses.",
        users: dbUsers
      });
    });
  });


function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
      return next();

  res.redirect('/signin');
}


  // Load users page
  app.get("/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("index", {
        users: dbUsers
      });
    });
  });

  app.get("/contact", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.render("partials/contact", {
        users: dbUsers
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
