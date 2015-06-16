'use strict';

/**
 * @ngdoc function
 * @name friendstripApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the friendstripApp
 */
angular.module('friendstripApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
