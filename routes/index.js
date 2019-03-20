const fileListing = require("../services/file.service.js");
const markDown = require("../services/markdown.service");

module.exports = {
  register: function(app) {
    app.get("/", function(req, res, next) {
      let data = {
        title: "Home",
        links: fileListing.CreatedFileList(),
        contents: ""
      };
      // LoadContents returns a promise
      markDown.LoadContents('home').then(function(html) {
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
        contents: ""
      };
      // LoadContents returns a promise
      markDown.LoadContents(route).then(function(html) {
        if (html) {
          data.contents = html;
        }
        res.render("pages/" + route, { data });
      });
    });

    app.get('/legal/', function(req, res, next){
      let data = {
        title: "Legal Information",
        links: fileListing.CreatedFileList(),
        contents: ""
      };
       // LoadContents returns a promise
       markDown.LoadContents('license').then(function(html) {
        if (html) {
          data.contents = html;
        }
        res.render("static/license", { data });
      });
    });
  }
};
