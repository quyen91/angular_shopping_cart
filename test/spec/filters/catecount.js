'use strict';

describe('Filter: cateCount', function () {

  // load the filter's module
  beforeEach(module('angularShopingCartApp'));

  // initialize a new instance of the filter before each test
  var cateCount;
  beforeEach(inject(function ($filter) {
    cateCount = $filter('cateCount');
  }));

  it('should return the input prefixed with "cateCount filter:"', function () {
    var text = 'angularjs';
    expect(cateCount(text)).toBe('cateCount filter: ' + text);
  });

});
