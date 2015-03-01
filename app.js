var animateApp = angular.modeule('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
	.when('/', {
		templateUrl : 'partials/page-home.html',
		controller  : 'mainController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

animateApp.controller('mainController', function($scope) {
	$scope.pageClass = 'page-home';
});