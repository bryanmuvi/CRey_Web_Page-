'use strict';

angular
  .module('CitasApp', ['ngRoute'])
  .config(['$routeProvider',
  	function($routeProvider) {
	    $routeProvider.
	      when('/offers', {
	          templateUrl: 'Assets/Views/main.html',
	        controller: 'PackageCtrl'
	      }).
	      when('/services', {
	          templateUrl: 'Assets/Views/view2.html',
	        controller: 'PackageCtrl'
	      }).
          when('/contact', {
              templateUrl: 'Assets/Views/view3.html',
                controller: 'PackageCtrl'
          }).
	      when('/aboutUs', {
	          templateUrl: 'Assets/Views/view4.html',
	          controller: 'PackageCtrl'
	      }).
	      otherwise({
	        redirectTo: 'Assets/Views/main.html',
	        controller: 'PackageCtrl'
	      });
  }]);