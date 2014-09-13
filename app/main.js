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
	setTimeout(function() {
		document.getElementById( 'appContainer' ).className = 'loader';
		document.getElementById( 'appLoading' ).className = 'loader';
	},100);
	return angular.bootstrap(document, ["app"]);
});