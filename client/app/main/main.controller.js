'use strict';

angular.module('ebolaAppApp')
  .controller('MainCtrl', function ($scope, $http, $stateParams) {
    $scope.patients = {};

    $http.get('/api/patients').success(function(data) {
      $scope.patients = data;
    });

    $http.get('/api/patients/' + $stateParams.patientId).success(function(data) {
      $scope.patient = data;
    });

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

    $scope.updatePatient = function(patientId){
      $http.put('/api/patients/' + patientId, { name: $scope.patient.name, city: $scope.patient.city, infectionDate: $scope.patient.infectionDate }).success(function(data) {
        $scope.patient = data;
      });
    };

  });
