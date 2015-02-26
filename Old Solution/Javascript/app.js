'use strict';

angular
  .module('CitasApp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider',
  	function($routeProvider) {
	    $routeProvider.
	      when('/main', {
	        templateUrl: '../Views/main.html',
	        controller: 'PackageCtrl'
	      }).
	      when('/offers', {
	        templateUrl: '../Views/offers-available.html',
	        controller: 'PackageCtrl'
	      }).
	      otherwise({
	        redirectTo: '../Views/main.html',
	        controller: 'PackageCtrl'
	      });
	        $locationProvider
  .html5Mode(true);
  }]);


angular
  .module('CitasApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider

    	 .when('/', {
	        templateUrl: '../Views/main.html',
	        controller: 'PackageCtrl'
	      }).
	      otherwise({
       		 redirectTo: '/'
	      });
  });