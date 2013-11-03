define([
	'jquery',
	'underscore',
	'backbone',
	'collections/todos',
	'views/todo',
	'text!templates/stats.html'
	], function($, _, Backbone, Todos, TodoView, statsTemplate) {

		var AppView = Backbone.View.extend({
			el: $('#todoapp'),

			collection: Todos,

			statsTemplate: _.template(statsTemplate),

			render: function() {
				var done = Todos.done().length();
				var remaining = Todos.remaining().length();
				this.$('#todo-stats').html(this.statsTemplate({
					total: Todos.length,
					done: done,
					remaining: remaining
				}));
			},
		});
		
		return AppView;
	})