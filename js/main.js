require.config({
	paths: {
		jquery: 'libs/jquery',
		uderscore: 'libs/underscore',
		backbone: 'libs/backbone',
		text: 'libs/text'
	}
});

require(['views/app'], function(AppView) {
	var app_view = new AppView;
})