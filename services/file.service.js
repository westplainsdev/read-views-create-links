const fs = require("fs");
const path = require("path");
const showdown = require("showdown");
const enums = require('./enum.service');

function createFileTitle(route) {
  return route.charAt(0).toUpperCase() + route.slice(1).replace(/_/g, " ");
}

function createdFilelist(route) {
  let fileslist = [];

  fs.readdir("views/pages/", (err, files) => {
    files.forEach(file => {
      // remove extension and remove any underscores or hypens
      let filename = file.slice(0, -4).replace(/_/g, " ").replace(/-/g, " ");
      let fileInfo = {
        fileName: filename,
        link: file.slice(0, -4),
        active: false
      };
      if (fileInfo.link === "home") {
        // undefined will happen at the '/' root of the application
        if (route === "unknown") {
          fileInfo.active = false;
        } else if (route == undefined || route === fileInfo.link) {
          fileInfo.active = true;
        }
        // we want the home link always first.
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


//*********** Internal function ****************** */
//moves the file to dir2
const moveFile = (file, dir2) => {
  //gets file name and adds it to dir2
  let fullFileName = path.basename(file);
  let destination = path.resolve(dir2, fullFileName);

  fs.rename(file, destination, error => {
    if (error) {
      throw error;
    } else {
      console.log("Successfully moved");
    }
  });
};

function activateFile(file) {
  let folderPath = enums.FolderPaths().inactivePagePath
  let path = `${folderPath}${file}.hbs`;

  if (fs.existsSync(path)) {
    moveFile(path, enums.FolderPaths().activePagePath);
  } else {
    console.log('file does not exist');
  }
}

function inactivateFile(file) {
  let folderPath = enums.FolderPaths().activePagePath
  let path = `${folderPath}${file}.hbs`;

  if (fs.existsSync(path)) {
    moveFile(path, enums.FolderPaths().inactivePagePath);
  } else {
    console.log('file does not exist');
  }

}

module.exports = {
  CreateFileTitle: createFileTitle,
  CreatedFileList: createdFilelist,
  ActivateFile: activateFile,
  InactivateFile: inactivateFile
};
