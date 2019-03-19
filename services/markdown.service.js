const showdown = require("showdown");
const fs = require("fs");

function loadMarkdownFile(route) {
  let converter = new showdown.Converter();
  if (route === "about") {
  return new Promise(function(resolve, reject) {
      fs.readFile("./content/about.md", 'utf8', (err, data) => {
        if (err) throw err;
        return resolve(converter.makeHtml(data));   
      });
    });
  } else {
    // return this promise in case there are files that do not have markdown content.
    return new Promise(function(resolve, reject){
      return resolve(undefined);
    });
  }
}

function loadContents(route){
  let path = `./content/${route}.md`;
  console.log('The path is: ', path);
  fs.exists(path,function(exists){
    console.log('The files exists: ', exists);
  });
}

module.exports = {
  LoadMarkDownFile: loadMarkdownFile,
  LoadContents: loadContents
};
