angular.module('RedditClone', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.posts = [];
    $scope.sortPosts = {};
    $scope.view = {};
    $scope.newPost = {};
    $scope.view.createPost = false;
    $scope.newPost = function() { $scope.view.createPost = !$scope.view.createPost; }
    $scope.post = function() {
      $scope.posts.push($scope.newPost);
      $scope.newPost = {}
    }
  }])
