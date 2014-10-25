'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('ebolaAppApp'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/patients')
      .respond([{name: 'Bob Smith', city: 'San Francisco'},
                {name: 'Troy Aikman', city: 'Dallas'},
                {name: 'William F. Buckley', city: 'Washington, D.C.'},
                {name: 'Patrick Stewart', city: 'Space'}
      ]);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.patients.length).toBe(4);
  });
});
