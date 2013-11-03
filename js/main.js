require.config({
	paths: {
		jquery: 'libs/jquery',
		uderscore: 'libs/underscore',
		backbone: 'libs/backbone',
		text: 'libs/text',
		storage: 'libs/backbone.localStorage-min'
	},

	shim: {
		underscore: {
			exports: '_'
		},

		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
});

require(['views/app'], function(AppView) {
	var app_view = new AppView;
});