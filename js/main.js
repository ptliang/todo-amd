require.config({
	paths: {
		jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
		underscore: 'http://documentcloud.github.com/underscore/underscore-min',
		backbone: 'http://documentcloud.github.io/backbone/backbone-min',
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

require(['views/app', 'collections/todos'], function(AppView, AppCollection) {
	var app_view = new AppView({
		collection: new AppCollection()
	});
});