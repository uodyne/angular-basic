require.config({
	baseUrl: './app',
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route',
		'angular-resource': '../bower_components/angular-resource/angular-resource',
		'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router'
	},
	shim: {
		'angular': {'exports': 'angular'},
		'angular-route': { deps: ['angular']},
		'uiRouter': { deps: ['angular']},
		'angular-resource': { deps: ['angular']}
	}
});

require(['angular', 'routes/routes'], function(angular, mainRoutes)
{
	return angular.bootstrap(document, ["app"]);
});