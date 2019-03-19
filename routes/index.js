const fileListing = require("../services/file.service.js");
const markDown = require('../services/markdown.service');

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
        links: fileListing.CreatedFileList(route),
        contents: ''
      };
      markDown.LoadContents(route);
      markDown.LoadMarkDownFile(route).then(function(html) {  
        if(html){
          data.contents = html;         
        }
        res.render("pages/" + route, { data });      
      });
    });
  }
};
