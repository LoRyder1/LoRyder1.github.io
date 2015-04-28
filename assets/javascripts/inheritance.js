Person = Backbone.Model.extend({
        initialize: function(){
            alert("Welcome to this world");
        }
    });
    
    var person = new Person({ name: "Thomas", age: 67});
    // or we can set afterwards, these operations are equivalent
    var person = new Person();
    person.set({ name: "Thomas", age: 67});