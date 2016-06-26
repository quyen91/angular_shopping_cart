'use strict';

describe('Filter: cateName', function () {

  // load the filter's module
  beforeEach(module('angularShopingCartApp'));

  // initialize a new instance of the filter before each test
  var cateName;
  beforeEach(inject(function ($filter) {
    cateName = $filter('cateName');
  }));

  it('should return the input prefixed with "cateName filter:"', function () {
    var text = 'angularjs';
    expect(cateName(text)).toBe('cateName filter: ' + text);
  });

});
