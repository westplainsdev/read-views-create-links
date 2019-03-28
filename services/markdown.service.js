const showdown = require("showdown");
const fs = require("fs");

function loadContents(route) {
  let path = `./page-content/${route}.md`;
  let converter = new showdown.Converter();

  if (fs.existsSync(path)) {
    // return a promise so that the html is there before rendering.
    return new Promise(function(resolve, reject) {
      fs.readFile(path, "utf8", (err, data) => {
        if (err) throw err;
        return resolve(converter.makeHtml(data));
      });
    });
  } else {
    // return this promise in case there are files that do not have markdown content.
    return new Promise(function(resolve, reject) {
      let notFoundTemplate = `
      <h2><i class="fa fa-exclamation-triangle text-warning"></i> 204 No Content</h2>
      <p>The server successfully processed the request, but is not returning any content.</p> 
      <p>The content may be available again in the future.</p>`;
      return resolve(notFoundTemplate);
    });
  }
}

module.exports = { 
  LoadContents: loadContents
};
