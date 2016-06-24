'use strict';

describe('Controller: AdminCategoryCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var AdminCategoryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminCategoryCtrl = $controller('AdminCategoryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminCategoryCtrl.awesomeThings.length).toBe(3);
  });
});
