# Ember.js 
  Is an open source JavaScript web framework, based on the model-view-controller (MVC) pattern

#Philosophy and design

**Focus on ambitious web applications**
  Ember sets out to provide a wholesale solution to the client-side application problem. This is in contrast to many Javascript frameworks that start by providing a solution to the V in MVC, and attempt to grow from there. 

**More productive out of the box**
  Ember is one component of a set of tools that work together to provide a complete development stack. The aim of these tools is to make the developer productive immediately. For example Ember CLI, provides a standard application structure and buil pipeline. It also has a pluggable architecture and over two thousand addons to enhance and extend it. 

**Stability without stagnation**
  This is the idea that backward compatibility is important and can be maintained while still innovaitng and evolving the framework.

**Future web standards foresight**
  Ember has been an early adopter and pioneer of many standards around Javascript and the web including promises, web components and ES6 syntax. Yehuda Katz, one of Ember's cofounders, is a member on TC39, which is the committee responsible for future versions of the Javascript language. 

Like Ruby on Rails, Ember follows convention over configuration(CoC), and the Don't Repeat Yourself(DRY) principle. It has been described as a highly opinionated framework built to be very flexible. 

#Basic Concepts

Five Key Concepts
  **Routes**
    In Ember, the state of an application is represented by a URL. Each URL has a corresponding route object that controls what is visible to the user. 

  **Models**
    Every route has an associate model, containing the data associated with the current state of the application. While one can use jQuery to load JSON objects from a server adn use those objects as models, most applications use a model library such as Ember Data to handle this. 

  