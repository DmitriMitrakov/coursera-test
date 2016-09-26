(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('myFirstController', myFunc);

myFunc.$inject = ['$scope', '$filter'];
function myFunc($scope, $filter) {
  $scope.name = "";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

})();


// !function(){"use strict";function e(e,n){e.name="",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("myFirstApp",[]).controller("myFirstController",e),e.$inject=["$scope","$filter"]}();
