'use strict';

describe('Controller: AdminAdminCtrl', function () {

  // load the controller's module
  beforeEach(module('angularShopingCartApp'));

  var AdminAdminCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdminAdminCtrl = $controller('AdminAdminCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AdminAdminCtrl.awesomeThings.length).toBe(3);
  });
});
