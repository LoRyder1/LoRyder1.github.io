(function () {

	var Rectangle = Backbone.Model.extend({});

	var RectangleView = Backbone.View.extend({


		tagName: 'div', 

		className: 'rectangle',

		events: {
			'click': 'move'
		},

		render: function() {
			this.setDimensions();
			this.setPosition();
			this.setColor();
			return this;
		},

		setDimensions: function () {
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		setPosition: function () {
			var position = this.model.get('position');
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		setColor: function () {
			this.$el.css('background-color', this.model.get('color'));
		}, 

		move: function () {
			this.$el.css('left', this.$el.position().left + 10);
		}

	});

	var models = [
		new Rectangle({
			width: 100, 
			height: 60, 
			position: {
				x: 330,
				y: 110
			}, 
			color: '#ff0000'
		}),
		new Rectangle({
			width: 100, 
			height: 80, 
			position: {
				x: 500,
				y: 110
			}, 
			color: '#00ff00'
		}),
		new Rectangle({
			width: 100, 
			height: 60, 
			position: {
				x: 390,
				y: 160
			}, 
			color: '#0000ff'
		}),
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 600,
				y: 100
			},
			color: '#ff00ff'
		}),
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 700,
				y: 140
			},
			color: '#ffff00'
		}),
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 800,
				y: 160
			},
			color: '#00ffff'
		}),
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 850,
				y: 100
			},
			color: '#ffffff'
		}),
		new Rectangle({
			width: 100,
			height: 60,
			position: {
				x: 1005,
				y: 100
			},
			color: '#000000'
		})

	];

	_(models).each(function (model) {
		$('div#canvas').append(new RectangleView({model: model}).render().el);
	});

	// var myView = new RectangleView({model: myRectangle});

	// $('div#canvas').append(myView.render().el); 


})();

// empty function, immediately invoked with (). - this is useful for grouping code together and for preventing variables from leaking into the global scope. Backbone is good for interactivity.