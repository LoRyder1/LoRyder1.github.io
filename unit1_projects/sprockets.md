# Sprockets

**Why does Sprockets need saving?**

Sprockets is the Asset Pipeline. "A maintainer does not owe you anthing". Not even an explanation. You owe a maintainer respect. Words without actions are empty. 

**Intro**

Sprockets is a Ruby library for compiling and serving web assets. It features declarative dependency management for JavaScript and CSS assets, as well as a powerful preprocessor pipeline that allows you to write assets in languages like CoffeeScript, Sass and SCSS. 

**Directives**

Directives are special comments in your asset file and the main way of interacting with processors. What kind of interactions? You can use these directives to tell Sprockets to load other files, or specify dependencies on other assets. 
For example, let's say you have custom JavaScript that you've written. You put this javascript in a file callded beta.js. The javascript makes heavy use of jQuery, so you need to load that before your code executes. You could add this directive to the top of beta.js
`$().ready({ 
// my custom code here
})
`

**Specifying Processors through File Extensions**

Sprockets uses the filename extensions to determine what processors to run your file and in what order. For example if you have a file:
`application.scss`
Then Sprockets will by default run the sass processor (which implements scss). The output file will be converted to css. You can specify multiple processors by specifying multiple file extensions. For example you can use Ruby's ERB template language to embed conent in your doc before running the sass processor. To accomplish this you would need to name your file 
`application.scss.erb`
Processors are run from your right to left, so in the above example the processor associated with erb will be run before the processor associated with scss extension. For a description of the processors that Sprockets has by default see the 'default processors' section below. Other libraries may register additional processors. 