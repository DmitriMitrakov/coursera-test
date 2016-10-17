(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuy = this;

  toBuy.items = ShoppingListCheckOffService.getToBuyItems();

  toBuy.buyItem = function (idx) {
    ShoppingListCheckOffService.buyItem(idx);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var bought = this;

  bought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService () {
  var service = this;

  var toBuyItems = [{name: "item1", quantity: 10},
                    {name: "item2", quantity: 20},
                    {name: "item3", quantity: 30},
                    {name: "item4", quantity: 40},
                    {name: "item5", quantity: 50}];

  var boughtItems = [];

  service.buyItem = function (idx) {
    boughtItems.push(toBuyItems[idx]);
    toBuyItems.splice(idx, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
