'use strict';

angular.module('ebolaAppApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('edit', {
        url: "/edit/:patientId",
        templateUrl: "main/edit.html"
      });

    $locationProvider.html5Mode(true);
  });
