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

