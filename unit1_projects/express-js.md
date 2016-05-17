#Express.js

The benefits of Express over plain Node.JS
  - Consistent Routing to modules
  - Consistent Middleware interface (akin to a filter?)
  - Handling for things like postdata, session management, static file serving, etc.

A partial list of features

  - all sorts of routing features including routing, separate handlers for 'put', 'get', 'post', etc. wildcard handling, variables pulled automatically from URLs, etc...
  - sub routers
  - static file serving
  - a framework that many popular template engines plugin to 
  - view caching
  - routing by case sensitivity or no case sensitivity
  - a middleware framework which tons of third party NPM modules plut into
  - eTag support
  - All sorts of useful properties and methods to query info on the request
  - all sorts of methods for constructing the response

Most folks building a web app would prefer to start with a web server and a framework and be able to use a wide variety of pre-built NPM modules that work with the framework rather than build all that stuff themselves