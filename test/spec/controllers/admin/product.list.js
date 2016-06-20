'use strict';

describe('Controller: AdminProductListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var AdminProductListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminProductListCtrl = $controller('AdminProductListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminProductListCtrl.awesomeThings.length).toBe(3);
  });
});
