const fileListing = require("../services/file.service");
const markDown = require("../services/markdown.service");
const userService = require("../services/user.service");
const enums = require("../services/enum.service");
let user = {};

module.exports = {
  register: function(app) {
    app.get("/", function(req, res, next) {
      let data = {
        title: "Home",
        links: fileListing.CreatedFileList(),
        contents: "",
        user: user
      };
      // LoadContents returns a promise
      markDown.LoadContents("home").then(function(html) {
        if (html) {
          data.contents = html;
        }
        res.render("pages/home", { data });
      });
    });

    app.get("/pages/:route", function(req, res, next) {
      let route = req.params.route;
      let data = {
        title: fileListing.CreateFileTitle(route),
        links: fileListing.CreatedFileList(route),
        contents: "",
        user: user
      };
      // LoadContents returns a promise
      markDown.LoadContents(route).then(function(html) {
        if (html) {
          data.contents = html;
        }
        res.render("pages/" + route, { data });
      });
    });

    app.get("/legal/", function(req, res, next) {
      let data = {
        title: "Legal Information",
        links: fileListing.CreatedFileList(enums.RouteEnums().unknown),
        contents: "",
        user: user
      };
      // LoadContents returns a promise
      markDown.LoadContents("license").then(function(html) {
        if (html) {
          data.contents = html;
        }
        res.render("static/license", { data });
      });
    });

    app.get("/login/", function(req, res, next) {
      let data = {
        title: "Sign In"
      };
      res.render("static/login", { data });
    });

    app.post("/checklogin", function(req, res, next) {
      let login = {
        username: req.body.username,
        password: req.body.password
      };

      let authenticated = userService.validateUser(login);
      if (authenticated) {       
        // simulating a database call
        let timer = setTimeout(function() {
          user = userService.getUserInfo();                 
          clearInterval(timer); 
          res.redirect(302,"/secure");         
        }, 1000);
      } else {       
        res.redirect(302, "/login/");
        res.end();
      }
    });

    app.get("/logout", function(req, res) {
      userService.logoutUser();
      user = {};
      res.redirect(302, "/");
    });

    app.get("/secure/", function(req, res, next){
      if(user.authenticated){
        let data = {
          title: "Secure Page",
          links: fileListing.CreatedFileList(enums.RouteEnums().unknown),
          contents: "",
          user: user,
          active: true
        };
        res.render('static/secure', { data });
      } else {
        res.redirect(302, "/login/");
        res.end();
      }     
    });
  }
};
