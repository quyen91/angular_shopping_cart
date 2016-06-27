'use strict';

/**
 * @ngdoc filter
 * @name angularShopingCartApp.filter:cateCount
 * @function
 * @description
 * # cateCount
 * Filter in the angularShopingCartApp.
 */
angular.module('angularShopingCartApp')
  .filter('cateCount', function (store) {
    return function (input) {

      var ref = firebase.database().ref('categories/' + input + '/books');
      ref.on('value', function(snapshot){
        var listbook = {};
        listbook = snapshot.val();
        // console.log(listbook);
        var count = 0;
        angular.forEach(listbook, function(value,key){
          count++;
          listbook.count = count;
        });
        store.set('cateCount', count);
      });
      return store.get('cateCount')
      
    };
  });
