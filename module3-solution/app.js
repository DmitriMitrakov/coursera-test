(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBaseUrl', 'https://davids-restaurant.herokuapp.com');

function FoundItems () {
  return {
    templateUrl: 'found-items.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  }
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm = "";
  ctrl.found = [];

  ctrl.getMatchedMenuItems = function () {
    MenuSearchService.getMatchedMenuItems(ctrl.searchTerm)
      .then(function (menuItems) {
        ctrl.found = menuItems;
      });
  };

  ctrl.removeItem  = function (index) {
    ctrl.found.splice(index, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBaseUrl'];
function MenuSearchService ($http, ApiBaseUrl) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      url: (ApiBaseUrl + "/menu_items.json")
    })
    .then(function (result) {
      return result.data.menu_items
        .filter(function (item) {
          return item.description.indexOf(searchTerm) !== -1;
        });
    })
    .catch(function (error) {
      console.log(error);
    });
  };
}

})();
