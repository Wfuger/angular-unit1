var app = angular.module("firstApp", []);
app.controller('myFirstController', ['$scope', function($scope) {
  $scope.name = 'Severus Snape';
}])
  .controller('ExercisesController', ['$scope', function($scope){
    $scope.FavColor = 'Lime Green Bitch';
    $scope.secondsInACentury = 60*60*24*365*100;
    $scope.rightNow = Date.now();
  }])
