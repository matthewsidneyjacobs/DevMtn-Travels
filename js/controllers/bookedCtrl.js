angular.module('devmtnTravel').controller('bookedCtrl',function($scope, mainSrv, $state){
  $scope.test = "hello test"
  $scope.getCity = function() {
    $scope.cities = mainSrv.travelInfo;
  }
  $scope.getCity();

  // Use the ng-style directive to change the background to the image link on the data object we are getting from the controller.
  //       You will need to write a function that checks the url params and then loops over the data object in the service and then returns
  //       the object the matches the id being passed in the url params. Do this in your controller
  // console.log($state)
  $scope.id = $state.params.param;

  var checkCities = function(){
    for (var i =0; i < $scope.cities.length; i++) {
      if ($scope.cities[i].id == $state.params.param) {
        console.log($scope.cities[i].city)
        return $scope.cities[i].city
      }
    }
  }
  var getImage = function(){
    for (var i =0; i < $scope.cities.length; i++) {
      if ($scope.cities[i].id == $state.params.param) {
        console.log($scope.cities[i].city)
        $scope.tool= $scope.cities[i].image
        return $scope.tool
      }
    }
  }

  $scope.sentCity = checkCities();

  $scope.cityImage = getImage();



})
