const fs = require("fs");
const showdown = require("showdown");

function createFileTitle(route) {
  return route.charAt(0).toUpperCase() + route.slice(1).replace(/_/g, " ");
}

function createdFilelist(route) {
  let fileslist = [];

  fs.readdir("views/pages/", (err, files) => {
    files.forEach(file => {
      // remove extension and remove any underscores or hypens
      let filename = file.slice(0, -4).replace(/_/g, " ").replace(/-/g, ' ');
      let fileInfo = {
        fileName: filename,
        link: file.slice(0, -4),
        active: false
      };
      if (fileInfo.link === "home") {
        // undefined will happen at the '/' root of the application
        if(route === "unknown"){
          fileInfo.active = false;
        } else if (route == undefined || route === fileInfo.link) {
          fileInfo.active = true;
        }
        // went want the home link always first.
        fileslist.unshift(fileInfo);
      } else {
        if (route === fileInfo.link) {
          fileInfo.active = true;
        }
        fileslist.push(fileInfo);
      }
    });
  });
  return fileslist.sort();
}

module.exports = {
  CreateFileTitle: createFileTitle,
  CreatedFileList: createdFilelist
};
