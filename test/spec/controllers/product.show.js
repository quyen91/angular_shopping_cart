'use strict';

describe('Controller: ProductShowCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var ProductShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductShowCtrl = $controller('ProductShowCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductShowCtrl.awesomeThings.length).toBe(3);
  });
});
