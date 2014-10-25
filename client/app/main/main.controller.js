'use strict';

angular.module('ebolaAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    // $scope.dogs = [{'name': 'fido', 'breed': 'mutt'}, {'name': 'dog2', 'breed': 'golden'}];

    $http.get('assets/patients.json').success(function(data) {
      $scope.patients = data;
    });

    $scope.orderProp = 'name';

    $scope.addPost = function(){
      $scope.patients.push({ name: $scope.name, city: $scope.city, infectionDate: $scope.infectionDate });
    };

  });
