var db = require("../models");

module.exports = function (app) {

  var userID = "";

  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  // Get all posts
  app.get("/api/posts", function (req, res) {
    db.User.findAll({}).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });
  
  /*
  // Create a new User
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a User by id
  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
  */


  app.post("/api/signup", function (req, res) {
    db.User.create({
        id: req.body.id,
        email: req.body.email,
        password: req.body.password
      })
      .then(function (dbSignup) {
        res.json(dbSignup);
      });
  });


  app.get("/api/signin/:email", function (req, res) {
    db.User.findOne({
        where: {
          email: req.params.email
        }
      })
      .then(function (dbSignIn) {
        res.json(dbSignIn);
        console.log(dbSignIn.dataValues.id);
        userID = dbSignIn.dataValues.id;


      });
  });


  app.post("/api/username/meta", function (req, res) {
    db.Meta.create({
        user_firstname: req.body.user_firstname,
        user_lastname: req.body.user_lastname,
        user_twitter: req.body.user_twitter,
        user_linkedin: req.body.user_linkedin,
        user_github: req.body.user_github,
        user_website: req.body.user_website,
        UserId: uID

      })
      .then(function (dbMeta) {
        res.json(dbMeta);
      });
  });

  app.put("/api/username/meta", function (req, res) {
    db.Meta.update({
        user_firstname: req.body.user_firstname,
        user_lastname: req.body.user_lastname,
        user_twitter: req.body.user_twitter,
        user_linkedin: req.body.user_linkedin,
        user_github: req.body.user_github,
        user_website: req.body.user_website,
        UserId: uID

      })
      .then(function (dbMeta) {
        res.json(dbMeta);
      });
  });

  app.get("/api/username/meta", function (req, res) {
    db.Meta.findOne({
      where: {
        UserId: userID
      },
      include: [db.User]
    }).then(function (dbMeta) {
      res.json(dbMeta);
    });
  });

  app.post("/api/username/post", function (req, res) {
    db.Post.create({
        post_title: req.body.post_title,
        post_content: req.body.post_content,
        post_img: req.body.post_img,
        post_author: req.body.post_author,
        post_cat: req.body.post_cat,
        post_tag: req.body.post_tag,
        post_type: req.body.post_type,
        UserId: uID

      })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  app.get("/api/username/post", function (req, res) {
    db.Post.findAll({
      where: {
        UserId: userID
      },
      include: [db.User]
    }).then(function (dbMeta) {
      res.json(dbMeta);
    });
  });

};