'use strict';

describe('Service: addtoCart', function () {

  // load the service's module
  beforeEach(module('angularShopingCartApp'));

  // instantiate service
  var addtoCart;
  beforeEach(inject(function (_addtoCart_) {
    addtoCart = _addtoCart_;
  }));

  it('should do something', function () {
    expect(!!addtoCart).toBe(true);
  });

});
