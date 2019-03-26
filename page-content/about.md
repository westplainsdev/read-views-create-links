## <i class="fa fa-info-circle"></i> About the application

<hr />
This application is more of a proof of concept than anything. The goal was to have the ability
to add in a handlebars view to a specific folder and have the server automatically be able
to create the route and the navigation for that view, load the navigation into the global navigation
and be able to render that view on demand.

### How did we do it?

For starters, we have a route for the initial index of the web application. This initial route
will talk to a `file.service` and cause the server to scan through a `pages` folder, find every
file inside of it and create a list of objects which each contain a `link`, a `filename` and sets
an `active` flag in case it's the currently active route. Once this list is created, it's passed
back to the initial index route where it's placed into the routes page data. At this point, a
second action occurs which determines if that route has associated page content which needs to be loaded and placed into the route's data. Once these two steps have occured; the view and data are combined together and rendered to the browser. When the browser receives the view, it displays a navigation menu which now can link to any view found in the view's directory.

### Markdown content you say?

Yes, even though you have a handlebars view, which could have any type of html in it, we decided to go ahead and seperate the actual content and place it into a markdown file so that it could easily be created, edited and maintained by someone who doesn't necessarily knows how to write code.

Now to get the markdown, we aren't doing anything through a database. We're doing this by convention. So every view has a file name, which is the route name, which is also used as the markdown content file name. If you have a view, and you name the markdown file the same, the framework will be able to find the content file, and associate it with the data being rendered with the same named view.

### What if you don't have something?

Good question.

1. First off, if you don't have a view in the `pages` folder, a navigation link will never be              generated for it. This does make it easy to add and remove pages / navigation items from the application.

2. Next, if you try to navigate to something which isn't in the `pages` folder, the application framework will catch the error and notify you with an error page.

3. Okay, you have view / navigation item, and you expected content to show up, but it doesn't. Once again, the application framework will catch the error and notify you. This does make it easy to add  and remove content very easily. You only need to have a content file named the same as the view / route for it to be associated with each other. Change the content file name, and the content is no longer available. Change it back, and upon the next render of the page the content will appear.

### How can I do a SPA with this?

Another great question. First the concept of building single page applications needs to be addressed. How big of a single page application are you going to build? If you said large, you're wrong. That's hard to do well. There's a lot of overhead for the front end framework. The potential for memory leaks grows as the SPA grows. Last, having many developers on working on the same SPA code base creates many issues in deployment, development, etc. So what if instead of one single application, you created many small to medium applications and group them together into one workspace suite?

That's why you have this proof of concept. Each view can literally be the index of a compiled single page application. Build your SPA in React, Angular, AngularJS, Vue, whatever, outside of this framework. Have the application be specific for a task. Have developers learn that one application and be able to maintain it well. Have an API server specific for that one task created, optimized and maintained outside of this application framework. When you're ready to deploy a section of the suite, take the index page, toss it into the `pages` folder, and watch it automagically register itself in the navigation and you now have updated your workspace suite.

This makes the idea of breaking things into smaller more manageable sections easier and closer to the idea of microservices.

### Is this secure?

A few concepts to think of. If you can add and remove navigation links easily, that quickly limites who can go where. If you can programmatically scan links based off of permissions, you can also remove links from a users navigation. If an SPA page is pulled up, not only have you made sure that a user can get there, you have also limited which users can get there. Additionally you can now secure the SPA with even more permissions specifically for that application. So yes, you can quickly go down a rabbit hole of securing this application in multiple levels and accessibility.

### Let's wrap this up...

That's is. We think we hit our goals with this proof of concept and are actually excited by some of them. Enjoy playing with this framework.
