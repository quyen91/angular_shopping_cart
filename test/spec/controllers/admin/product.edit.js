'use strict';

describe('Controller: AdminProductEditCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var AdminProductEditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminProductEditCtrl = $controller('AdminProductEditCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminProductEditCtrl.awesomeThings.length).toBe(3);
  });
});
