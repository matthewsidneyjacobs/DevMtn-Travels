angular.module('devmtnTravel').controller('locationsCtrl',function($scope, mainSrv){
  $scope.test = "hello test"

  $scope.getCity = function() {
    $scope.cities = mainSrv.travelInfo;
  }
  $scope.getCity();
})
