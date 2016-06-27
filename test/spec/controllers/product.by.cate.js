'use strict';

describe('Controller: ProductByCateCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var ProductByCateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductByCateCtrl = $controller('ProductByCateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductByCateCtrl.awesomeThings.length).toBe(3);
  });
});
