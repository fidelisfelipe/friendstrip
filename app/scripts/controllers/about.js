'use strict';

/**
 * @ngdoc function
 * @name friendstripApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the friendstripApp
 */
angular.module('friendstripApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
