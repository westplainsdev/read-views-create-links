const fs = require("fs");
const showdown = require("showdown");

function createFileTitle(route) {
  return route.charAt(0).toUpperCase() + route.slice(1).replace(/_/g, " ");
}

function createFilelist(route) {
  let fileslist = [];

  fs.readdir("views/pages/", (err, files) => {
    files.forEach(file => {
      // remove extension and remove any underscores
      let filename = file.slice(0, -4).replace(/_/g, " ");
      let rowInfo = {
        fileName: filename,
        link: file.slice(0, -4),
        active: false
      };
      if (rowInfo.link === "home") {
        // undefined will happen at the '/' root of the application
        if (route == undefined || route === rowInfo.link) {
          rowInfo.active = true;
        }
        // went want the home link always first.
        fileslist.unshift(rowInfo);
      } else {
        if (route === rowInfo.link) {
          rowInfo.active = true;
        }
        fileslist.push(rowInfo);
      }
    });
  });
  return fileslist.sort();
}

module.exports = {
  CreateFileTitle: createFileTitle,
  CreatedFileList: createFilelist
};
