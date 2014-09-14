define(['modules/app'], function(app)
{
	app.controller('loginCtrl', ['$scope', function($scope)
	{

		$scope.templates=[{
			id: 1,
		    name:'First Course',
		    url:'views/courses/course1.html'
		  }
		  ,{
		  	id: 2,
		    name:'Last Course',
		    url:'views/courses/course2.html'
		  }
		];

		$scope.selectedTemplate=$scope.templates[0].url;
		$scope.selectedTemplateId=$scope.templates[0].id;
		$scope.selectTemplate=function(template){
			$scope.selectedTemplate=template.url;
			$scope.selectedTemplateId=template.id;
		}
	}]);
});