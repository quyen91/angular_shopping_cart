'use strict';

describe('Controller: AdminProductShowCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var AdminProductShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminProductShowCtrl = $controller('AdminProductShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminProductShowCtrl.awesomeThings.length).toBe(3);
  });
});
