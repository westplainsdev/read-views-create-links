# read-views-create-links

Dynamically create links from the views in the application.

## Instructons

Using `npm install` download and intall all of the necessary dependencies

`nodemon` will be installed, so you can change any node based JavaScript as have the server reload. View changes on the other hand
so far require a hard restart.

Use `npm start` to fire up the server and serve it to the browser on `localhost:\3010`

## What happens?

When the server first starts up, the `file.service.js` file will read all of the hanblebar views which live under `views/pages/` from there
it will trim off the `.hbs` extension, remove any undrescores which should be used to seperate words, and then create an object from file
found and assign the link, the title, and let the object know if it's the active view.

Inside the `routes/index.js` file, the `register` function takes the current route, creates it the file list for the navigation, and creates the
title for the current page. Depending on if you're in the root or a named route, the two navigation endpoints will render a server side handlebars
page and serve it to the browser on `localhost:\3010`.

Adding additional handlbars pages to the `views/pages/` directory will automatically add those pages to the navigation. Addtionally, there is a
single page application in this current collection of pages. As you will see, it too is automatically added to the collection and does render
as a normal page and does have all of the functionality you would expect from a client side framework.

## Notes / Gotcha's

You have to restart the server for now if you change the contents of the views. I'm working on getting around that.

The look and feel is simple Bootstrap 4. The SPA that was added was an older application and only a few markup tweeks were needed to fit in with the
overall look and feel.

If you add pages to the `views/pages/` and they're more than one word, use underscores to seperate the words. So far the code isn't setup to handle anyting more
than that.
