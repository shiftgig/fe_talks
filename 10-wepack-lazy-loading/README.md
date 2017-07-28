# What is webpack:
* It's the tool we on the FE use to take all of our source files and compile to a single js file for each app
* It allows us to do lots of interesting things that aren't available in browsers like import dependencies and other ES6 syntax.
* Through the use of plugins we can bundle everything into one javascript file, including images, CSS, and text files.

# How can we make webpack better:
Sometimes it's ok to have everything in one javascript file but for larger applications it's more efficient to only download what you need to start the app. There may be a small part of the site that only sees 5% traffic but has a lot of large dependencies. We don't want to slow down 95% of users with one large file.

Webpack has code splitting and lazy loading features built in. It automatically splits up your bundles using the import() function alongside special comments:

```javascript
var ContactForm = <div></div>

import(/* webpackChunkName "ContactFormComponent" */ './ContactFormComponent').then((module) => {
  ContactForm = module.default
})
```

# Code splitting and lazy loading are cool
* It works straight out of the box with webpack, and no plugins. Webpack configs can become tedious to manage because of all the different features, so this is a great benefit.
* You can easily create as many separate modules as you want and you still only need to initially load one js file.
* Webpack managing everything makes it easier to reason about the app splitting logic.

# Real life example
* Currently we're doing a kind of code splitting in the Client app but the chunks are both requested on page load, so we're not doing any lazy loading. The files are 703KB for the app file and 985KB for the vendor libs, or more than 1.5MB total. This isn't a huge concern because basically all of our users are desktop users, but in general we want to keep the file size down 
* Pretty cool website - app.js was 150kb before including several frameworks on just one page. After include jquery, backbone, and angular the build went up to 450kb. By splitting up the code we're able to get preserve the size of the original 
