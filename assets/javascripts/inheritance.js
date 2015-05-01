// Person = Backbone.Model.extend({
//         initialize: function(){
//             alert("Welcome to this world");
//         }
//     });
    
//     var person = new Person({ name: "Thomas", age: 67});
//     // or we can set afterwards, these operations are equivalent
//     var person = new Person();
//     person.set({ name: "Thomas", age: 67});
//     

Person = Backbone.Model.extend({
	defaults: {
		name: 'Fetus',
		age: 0,
		child: ''
	},
	initialize: function(){
		alert("Welcome to this world");
		this.on("change:name", function(model){
			var name = model.get("name");
			alert("Changed my name to " + name );
		});
	},
	adopt: function( newChildsName ){
		this.set({ child: newChildsName });
	}
});

var person = new Person({ name: "Thomas", age: 67, child: "Ryan"});
person.adopt('John Resig');
var child = person.get("child")

var age = person.get("age")
var name = person.get("name")
var child = person.get("child")

var person = new Person();

person.set({ name: "Thomas", age: 67});

// we can bind the change listener to individual attributes or if we like simpley to listen for changes to all attributes of the model.

// Interacting with the server
var UserModel = Backbone.Model.extend({
	urlRoot: '/user', 
	defaults: {
		name: '',
		email: ''
	}

});

var user = new UserModel();

var userDetails = {
	name: 'Thomas', 
	email: 'thomasalwyndavis@gmail.com'
};

user.save(userDetails, {
	success: function (user) {
		alert(user.toJSON());
	}
})

// Getting a model

var user = new Usermodel({id: 1});

user.fetch({
	success: function (user) {
		alert(user.toJSON());
	}
})

// Updating a model

var user = new Usermodel({
	id: 1, 
	name: 'Thomas', 
	email: 'thomasalwyndavis@gmail.com'
});

user.save({name: 'Davis'}, {
	success: function (model) {
		alert(user.toJSON());
	}
})

user.destroy({
	success: function () {
		alert('Destroyed');
	}
});

var person = new Person({ name: "Thomas", age: 67});
	var attribtues = person.toJSON();

	var attributes = person.attributes;

Person = Backbone.Model.extend({

	validate: function( attributes ){
		if( attributes.age < 0 && attributes.name != "Dr Manhatten" ){
			return "You can't be negative years old";
		}
	},
	initialize: function(){
		alert("Welcome to this world");
		this.bind("error", function(model, error){
			alert( error );
		});
	}
});

var person = new Person;
person.set({ name: "Mary Poppins", age: -1 });

// What is a View

SearchView = Backbone.View.extend({
	initialize: function(){
		alert("Alerts suck.");
	}
});

var search_view = new SearchView();

the "el" property references the DOM objet created in the browser. Every Backbone.js view has an "el" property, and if it is not defined, Backbone.js will construct its own, which is an empty div element.
// "<div id=search_container></div>"

SearchView = Backbone.View.extend({
	initialize: function(){
		alert("Alerts suck.")
	}
});

var search_view = new SearchView({ el: $("#search_container") });

SearchView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var template = _.template( $("#search_template").html(), {} );
		this.$el.html( template );
	}
});

var search_view = new SearchView({ el: $("#search_container") });

// CDN - content delivery network

// Listening for events

SearchView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var template = _.template( $("#search_template").html(), {} );
		this.$el.html( template );
	},
	events: {
		"click input[type=button]": "doSearch"
	},
	doSearch: function( event ){
		// Button clicked, you can access the element that was clickeed with event.currentTarget
		alert( "Search for " + $("#search_input").val() );
	}
});

var search_view = new SearchView({ el: $("#search_container") });


// Using template variables

SearchView = Backbone.View.extend({
	initialize: function(){
		this.render();
	},
	render: function(){
		var variables = { search_label: "My Search" };

		var template = _.template( $("#search_template").html(), variables );

		this.$el.html( template );
	}, 
	events: {
		"click input[type=button]": "doSearch"
	},
	doSearch: function( event ){
		aler( "Search for " + $("#search_input").val() );
	}
});

var search_view = new SearchView({ el: $("#search_container") });

// Models ar the heart of any JavaScript application, containing the interactive data as well as a large part of the logic surrounding it: conversions, validations, computed properties, and access conrol.

// Backbone views are used to reflect what your applications data models look like. They are also used to listen to events and react accordingly. 

// Backbone routers are used for routing your applications URLs when using hash tags. Defined routers should always contain at least one route and a function to map the particular route to. 

// Backbone collections are simply an ordered set of models. Such as-> Model: Student, Collection: ClassStudents. Model: Todo Item, Collection: Todo List. Model: Animal, Collection: Zoo. Also Model: Student, Collection: Gym Class 

var AppRouter = Backbone.Router.extend({
	routes: {
		"posts/:id": "getPost",
		"*actions": "defaultRoute"
	}
});

var app_router = new AppRouter;

routes : {
	"posts/:id": "getPost",
	"download/*path": "downloadFile",
	":route/:action": "loadView",
},
app_router.on('route:getPost', function (id) {
	alert( id );
});
app_router.on('route:downloadFile', function ( path ){
	alert(path);
});
// app_router.on('route:defaultRoute', function(actions) {
// 	alert(actions);
// });
app_router.on('route:loadView', function( route, action ){
	alert(route + "_" + aciton);
});
Backbone.history.start();

var Song = Backbone.Model.extend({
	initialize: function(){
		console.log("Music is the answer");
	}
});

var Album = Backbone.Collection.extend({
	model: Song
});




































