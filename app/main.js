require.config({
	baseUrl: './',
	paths: {
		'angular': './components/angular/angular.min',
		'angular-resource': './components/angular-resource/angular-resource.min',
		'domReady': './components/requirejs-domready/domReady',
		'ui.router': './components/angular-ui-router/release/angular-ui-router.min'
	},
	shim: {
		'angular': {'exports': 'angular'},
		'ui.router': { deps: ['angular']},
		'angular-resource': { deps: ['angular']}
	}
});
	


require(['angular', 'routes/routes', 'domReady'], function(angular, mainRoutes, domReady)
{
    domReady(function () {
		document.getElementById( 'appContainer' ).className = 'loader';
		document.getElementById( 'appLoading' ).className = 'loader';
		setTimeout(function() {
			document.getElementById( 'appLoading' ).className = 'hide';
		},300);
    });
	return angular.bootstrap(document, ["app"]);
});
