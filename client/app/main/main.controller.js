'use strict';

angular.module('ebolaAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.patients = {};

    $http.get('/api/patients').success(function(data) {
      $scope.patients = data;
    });

    //
    // $http.put('/api/patients').success(function(data) {
    //   $scope.patients = data;
    // });

    $scope.orderProp = 'name';

    $scope.addPost = function(){
      $http.post('/api/patients', { name: $scope.name, city: $scope.city, infectionDate: $scope.infectionDate }).success(function(data) {
        $scope.patients.push(data);
      });
    };

    $scope.deletePost = function(patientId){
      $http.delete('/api/patients/' + patientId).success(function() {
        $scope.patients = _.reject($scope.patients, { _id: patientId });
      });
    };

  });
