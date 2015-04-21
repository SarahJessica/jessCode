'use strict';
angular.module('jessCode', [])
.controller('mapreduce', ['$scope', function($scope){
  $scope.numsToArray = function(){
    if($scope.numString){
      $scope.nums = $scope.numString.split(',').map(function(n){
        return n*1;
    });
  }

  compute();
};
  function compute(){
    if($scope.nums.length > 0){
      $scope.sum = $scope.nums.reduce(function(previous, current){
        return previous + current;
      });

      $scope.product = $scope.nums.reduce(function(previous, current){
        return previous * current;
      });
    } else{
      $scope.sum = 0;
      $scope.product = 0;
    }
  }

  $scope.removeNum = function(index){
    $scope.nums.splice(index, 1);
    compute();
  }

  $scope.addNewNum = function(){
    $scope.nums.push($scope.newNum);
    compute();
  }

  $scope.remove = function(arg){

    $scope.nums = $scope.nums.filter(function(n){
      return n % 2 === arg;
    });
    compute();
  }

  // $scope.removeEvens = function(){
  //   $scope.nums = $scope.nums.filter(function(n){
  //     return (n % 2);
  //   });
  //   compute();
  // }
}])
