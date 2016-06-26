'use strict';

/**
 * @ngdoc service
 * @name angularShopingCartApp.common
 * @description
 * # common
 * Service in the angularShopingCartApp.
 */
angular.module('angularShopingCartApp')
  .service('common', function ($http, store) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   
    this.getCateTitle = function(key){
      var refCate = firebase.database().ref('categories/' + key);
      refCate.on('value', function(snapshot){
        var title = snapshot.val().title;
        store.set('tempCateTitle', title);
      });
    }

});
