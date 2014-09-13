require.config({
	baseUrl: './app',
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-resource': '../bower_components/angular-resource/angular-resource',
		'ui.router': '../bower_components/angular-ui-router/release/angular-ui-router'
	},
	shim: {
		'angular': {'exports': 'angular'},
		'ui.router': { deps: ['angular']},
		'angular-resource': { deps: ['angular']}
	}
});

require(['angular', 'routes/routes'], function(angular, mainRoutes)
{
	return angular.bootstrap(document, ["app"]);
});