(function () {
  'use strict';

  angular.module('ControllerAsApp', [])
  .controller('RootController', RootController)
  .controller('ParentController1', ParentController1)
  .controller('ChildController1', ChildController1)
  .controller('ParentController2', ParentController2)
  .controller('ChildController2', ChildController2);

  function RootController() {
    var root = this;
    root.parcel = {
      msg: 'message from root'
    }
  }

  ParentController1.$inject = ['$scope'];
  function ParentController1($scope) {
    $scope.parentValue = 1;
    $scope.pc = this;
    $scope.pc.parentValue = 1;
    console.log("PARENT $scope: ", $scope);
    console.log("msg: ", $scope.root.parcel.msg);
    $scope.root.parcel.msg = "received in parent";
  }

  ChildController1.$inject = ['$scope'];
  function ChildController1($scope) {
    // $scope.parentValue = 2;
    // console.log("$scope.parentValue: ", $scope.parentValue);
    console.log("CHILD $scope: ", $scope);
    //
    // $scope.pc.parentValue = 3;
    // console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
    // console.log("CHILD $scope: ", $scope);
    // console.log("From parent: ", $scope.$parent.parentValue);
    console.log("msg: ", $scope.root.parcel.msg);
    $scope.root.parcel.msg = "received in child";
  }

  // ParentController2.$inject = ['$scope'];
  function ParentController2() {
    var parent = this;
    parent.value = 1;
  }

  // ChildController2.$inject = ['$scope'];
  function ChildController2() {
    var child = this;
    child.value = 5;
    // console.log("CHILD $scope: ", $scope);
  }

  // var animal = {
  //   name: "unknown",
  //   children: {
  //     number: 0
  //   },
  //   makeNoise: function() {
  //     console.log('...');
  //   }
  // }
  //
  // var cat = Object.create(animal);
  // cat.name = "Kitty";
  // cat.children.number = 2;
  // cat.makeNoise = function() {
  //   console.log('Murrrr...');
  // };
  //
  // console.log(animal);
  // console.log(cat);

})();
