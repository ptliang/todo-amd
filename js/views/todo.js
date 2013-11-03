define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/todos.html'
	], function($, _, Backbone, todosTemplate) {
		var TodoView = Backbone.View.extend({
			tagName: 'li',

			template: _.template(todosTemplate),

			events: {
				'click .check': 'toggleDone',
				'dblclick div.todo-content': 'edit',
				'click span.todo-destroy': 'clear',
				'keypress .todo-input': 'updateOnEnter'
			},

			initialize: function() {
				this.model.on('change', this.render, this);
				this.model.view = this;
			},

			render: function() {
				this.$el.html(this.tempalte(this.model.toJSON()));
				this.setContent();
				return this;
			},

			setContent: function() {
				var content = this.model.get('content');
				this.$('.todo-content').text(content);
				this.input = this.$('.todo-input');
				this.input.on('blur', this.close);
				this.input.val(content);
			}
		});

		return TodoView;
	});