'use strict';

/**
 * @ngdoc filter
 * @name angularShopingCartApp.filter:cateName
 * @function
 * @description
 * # cateName
 * Filter in the angularShopingCartApp.
 */
angular.module('angularShopingCartApp')
  .filter('cateName', function (store) {
    return function (input) {
      var refCate = firebase.database().ref('categories/' + input);
      refCate.on('value', function(snapshot){
        var title = snapshot.val().title;
        store.set('tempCateTitle', title);
      });
      if(input==null){ return null};
      return store.get('tempCateTitle');
    	
    };

  });
