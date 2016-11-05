(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService ($http) {
    var menu = this;

    menu.getAllCategories = function () {
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/categories.json'
      });
    };

    menu.getItemsForCategory(categoryShortName) = function () {
      return $http({
        url: ('https://davids-restaurant.herokuapp.com/menu_items.json?category=' + categoryShortName)
      });
    };

  };

})();
