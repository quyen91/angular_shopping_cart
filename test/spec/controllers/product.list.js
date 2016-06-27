'use strict';

describe('Controller: ProductListCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var ProductListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductListCtrl = $controller('ProductListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductListCtrl.awesomeThings.length).toBe(3);
  });
});
