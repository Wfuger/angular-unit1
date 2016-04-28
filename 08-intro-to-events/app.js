angular.module('myApp', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.view = {};
    $scope.view.number = 5;
    $scope.pickRandomNumber = function() {
      $scope.view.number = Math.floor(Math.random() * 10) + 1;
    }
    $scope.backwards = function(word){
      return $scope.view.reverseMe = word.split('').reverse().join('');
    }
  }])
  .controller('pingPong', ['$scope', function($scope) {
    $scope.game = {};
    $scope.game.clicks = 0;
    $scope.game.p1Score = 0;
    $scope.game.p2Score = 0;
    $scope.game.p1wins = 0;
    $scope.game.p2wins = 0;
    $scope.game.serve = false;
    $scope.point = function(player) {
      if($scope.game.p1winner || $scope.game.p2winner) { return; }
      else {
        player === 'p1' ? $scope.game.p1Score++ : $scope.game.p2Score++;
        $scope.game.clicks++;
        if( $scope.game.clicks % 2 === 0 )
          $scope.game.serve === false ? $scope.game.serve = true : $scope.game.serve = false;
        if( $scope.game.p1Score === 11 || $scope.game.p2Score === 11 )
          if(player === 'p1'){
           $scope.game.p1winner = true;
           $scope.game.p1wins++;
          } else {
           $scope.game.p2winner = true;
           $scope.game.p2wins++;
          }
        }
      }
    $scope.reset = function() {
      $scope.game.clicks = 0;
      $scope.game.p1Score = 0;
      $scope.game.p2Score = 0;
      $scope.game.serve = false;
      $scope.game.p1winner = false;
      $scope.game.p2winner = false;
    }
  }])
  .controller('colorControl', ['$scope', '$timeout', '$log', function($scope, $timeout, $log){
    $scope.colors = [];
    var replaying = false;
    var displayPrevColor = function(i) {
      $scope.color = $scope.colors[i];
      replaying = false;
      $timeout(displayPrevColor, 1000);
    };
    if (!replaying) {
      replaying = true;
      $timeout(function() { displayPrevColor(); }, 500);
    }
    $scope.replay = function() {
        for (var i = $scope.colors.length; i > 0; i--) {
          displayPrevColor(i-1)
        }
      }

    $scope.randomColor = function() {
      var x = Math.round(0xffffff * Math.random()).toString(16),
       y = (6-x.length),
       z = "000000",
       z1 = z.substring(0,y),
       color = "#" + z1 + x;
      $scope.colors.push(color)
      return $scope.color = color;
    }
  }])
  .controller('addressForm', ['$scope', function($scope){
    $scope.address = {}
    $scope.showAddress = {}
    $scope.show = false;
    $scope.showMeh = function() {
      $scope.show = true;
      $scope.showAddress = $scope.address;
      $scope.address = {};
    }
  }])
  .controller('formControl', ['$scope', "$log", function($scope, $log){
    $scope.newContact = {};
    $scope.contacts = [];
    $scope.addContact = function() {
      $scope.contacts.push($scope.newContact);
      $scope.newContact = {};
      console.log($scope.contacts);
    }
  }])
