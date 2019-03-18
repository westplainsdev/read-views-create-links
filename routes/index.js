const fileListing = require("../services/file.service.js");

module.exports = {
  register: function(app) {
    app.get("/", function(req, res, next) {
      let data = {
        title: "Home",
        links: fileListing.CreatedFileList()
      };

      res.render("pages/home", { data });
    });

    app.get("/pages/:route", function(req, res, next) {
      let route = req.params.route;    
      let data = {
        title: fileListing.CreateFileTitle(route),
        links: fileListing.CreatedFileList(route)
      };

      res.render("pages/" + route, { data });
    });
  }
};
