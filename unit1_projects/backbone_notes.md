Backbone.js - is a JavaScript library with a RESTful JSON interface
boilerplate code - sections of code that have to be included in many places with little or no alteration

SPA - single page application
======================

- lack of tooling and experience
- search engine optimization
- work with different browswers

Why do we need backbone.js

- develop a coherent, readable, structures, testable & maintable client-side application is not easy. 
- Backbone contains tools and codified knowledge that minimize the difficulties.

The Backbone Solution

- Backbone provides a set of tools for introducing structure into client-side applications

Models represent data required by your application and raise events when your data changes.
Collection group models they also forward events from the models they contain as well as events of their own. 
Collections depend on models

Backbone connects various dependencies using events. Events travel in opposite direction to the dependency.

View handle events from models and collections. Render any mockup. 
Views can also handle events from the DOM. 

Router - simulate page changes and to provide support for page history and bookmarking. 

Required Dependencies
- Underscore.js - functional programming support for JavaScript
- jQuery/zepto - DOM manipulation

Backbone.Model is a function that is a JavaScript constructor for creating new Model Objects

Backbone Models don't store their data directly as properties ont the object which is why you have to use the get method to read a property and you have to use the set method to write a property.

jsFiddle Backbone Environment - jsFiddle is an online environment for experimenting with html, javascript and css

Summary - 
1. Web applications are becoming more interactive
2. Developing web applications with client-side state is hard - and the tools are relatively immature. 
3. Backbone is a library that helps organize client-side applications - it is not a framework (and it's not mvc!)

The Purpose of Models: 
- Models form the core of your app
- They contain you app's state as well as logic and behavior
- Models are the singl point of truth for data
- Models provide a lifecycle
- They communicate changes to the rest of the application via events

Defining New Model Types: 
- Create new Model 'types' by extending Backbon.Model

Model Inheritance
- models can inherit from other models
var Vehicle = Backbone.Model.extend({});
var Car = Vehicle.extend({});




Not so long ago, “data-rich web application” was an oxymoron. Today, these applications are everywhere and you need to know how to build them.

Traditionally, web applications left the heavy-lifting of data to servers that pushed HTML to the browser in complete page loads. The use of client-side JavaScript was limited to improving the user experience. Now this relationship has been inverted - client applications pull raw data from the server and render it into the browser when and where it is needed.

Think of the Ajax shopping cart which doesn’t require a refresh on the page when adding an item to your basket. Initially, jQuery became the go-to library for this paradigm. Its nature was to make Ajax requests then update text on the page and so on. However, this pattern with jQuery revealed that we have implicit model data on the client side. With the server no longer being the only place that knows about our item count, it was a hint that there was a natural tension and pull of this evolution.

The rise of arbitrary code on the client-side which can talk to the server however it sees fit has meant an increase in client-side complexity. Good architecture on the client has gone from an afterthought to essential - you can’t just hack together some jQuery code and expect it to scale as your application grows. Most likely, you would end up with a nightmarish tangle of UI callbacks entwined with business logic, destined to be discarded by the poor soul who inherits your code.

Thankfully, there are a growing number of JavaScript libraries that can help improve the structure and maintainability of your code, making it easier to build ambitious interfaces without a great deal of effort. Backbone.js has quickly become one of the most popular open-source solutions to these issues and in this book we will take you through an in-depth walkthrough of it.