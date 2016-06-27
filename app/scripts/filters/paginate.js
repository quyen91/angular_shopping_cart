'use strict';

/**
 * @ngdoc filter
 * @name angularShopingCartApp.filter:paginate
 * @function
 * @description
 * # paginate
 * Filter in the angularShopingCartApp.
 */
angular.module('angularShopingCartApp')
  .filter('paginate', function () {
    return function (input, start) {
      var returnObj = {};
      var arr = Object.keys(input);
      for(var i=start; i< arr.length; i++){
        var index = arr[i];
        returnObj[index] = input[index];
      }
      return  returnObj;
    };
  });
