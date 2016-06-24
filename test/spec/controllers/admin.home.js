'use strict';

describe('Controller: AdminHomeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var AdminHomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminHomeCtrl = $controller('AdminHomeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminHomeCtrl.awesomeThings.length).toBe(3);
  });
});
