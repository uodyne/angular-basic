define(['modules/app'], function(app)
{
	app.controller('loginCtrl', ['$scope', function($scope)
	{

		$scope.templates=[{
		    name:'First Course',
		    url:'views/courses/course1.html'
		  }
		  ,{
		    name:'Last Course',
		    url:'views/courses/course2.html'
		  }
		];

		$scope.selectedTemplate=$scope.templates[0].url;
		$scope.selectTemplate=function(template){
			$scope.selectedTemplate=template.url;
		}
	}]);
});