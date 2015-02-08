'use strict';

/**
 * @ngdoc function
 * @name adminappApp.controller:PackageCtrl
 * @description
 * # PackageCtrl
 * Controller of the adminappApp
 */
angular.module('CitasApp')
  .controller('PackageCtrl', function ($scope,  $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    alert("hola nuzka");
    console.log("Hola nuzca2");
  });
