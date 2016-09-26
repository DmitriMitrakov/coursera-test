(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', lunchFunc);

lunchFunc.$inject = ['$scope'];
function lunchFunc($scope) {
  $scope.lunch = "";
  $scope.message = "";
  $scope.messageColor = "";

  $scope.checkLunch = function () {
    if (!$scope.lunch) {
      $scope.message = "Please enter data first";
      $scope.messageColor = "red";
      return;
    }
    var numberOfLunchItems = $scope.lunch.split(",");
    if (numberOfLunchItems.length <= 3) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
    $scope.messageColor = "green";
  };
}

})();
