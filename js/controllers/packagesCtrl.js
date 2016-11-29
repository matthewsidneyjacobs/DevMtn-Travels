angular.module('devmtnTravel').controller('packagesCtrl',function($scope, mainSrv){
  $scope.test = "hello test"
  $scope.getCity = function() {
    $scope.cities = mainSrv.travelInfo;
  }
  $scope.getCity();
})
