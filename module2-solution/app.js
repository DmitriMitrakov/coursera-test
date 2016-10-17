(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = [{name: "items",  quantity: 2},
                 {name: "items", quantity: 3},
                 {name: "items", quantity: 4},
                 {name: "items",   quantity: 5},
                 {name: "items",   quantity: 6}];

  toBuy.buyItem = function (item, idx) {
    ShoppingListCheckOffService.addItem(item);
    toBuy.items.splice(idx, 1);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.items = ShoppingListCheckOffService.getItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  var items = [];

  service.addItem = function (item) {
    items.push(item);
  };

  service.getItems = function () {
    return items;
  };
}

})();
