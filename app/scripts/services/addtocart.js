'use strict';

/**
 * @ngdoc service
 * @name angularShopingCartApp.addtoCart
 * @description
 * # addtoCart
 * Service in the angularShopingCartApp.
 *
 * Save ID book to localstorage array




 */
angular.module('angularShopingCartApp')
  .service('addtoCart', function (store) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.addtocart = function(bookid){
      
      var cartList = [];
      
      if(store.get('cartList')){ 
        cartList = store.get('cartList');
        if(cartList.indexOf(bookid) == -1){
          cartList.push(bookid);
          store.set('cartList', cartList);
          alert('Add successfully');
        }else{alert('Already added to cart');}

      }else{
        cartList.push(bookid);
        store.set('cartList', cartList);
        alert('Add successfully');
      } 

       
      // var book1 = {};
      // // add this to cart
      // var ref = firebase.database().ref();
     //    // get cart id of user. One user have one cart
     //    // Check if is first visit page or exist visitor
     //    if(store.get('userCartKey')){
     //     alert('exist')
     //     var newCartKey = store.get('userCartKey');
     //    }else{
     //     var newCartKey = firebase.database().ref().child('carts').push().key;
     //       store.set('userCartKey', newCartKey);
     //    }
        
     //    console.log(newCartKey);

     //    var updates ={};
     //    book1.title = 'erer';
     //    book1.price = '123';

     //    updates['/carts/' + newCartKey + '/' + bookid] = book1;
     //    ref.update(updates);
    }


  });
