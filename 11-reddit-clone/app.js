angular.module('RedditClone', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.posts = [];
    $scope.view = {};
    $scope.newPost = {};
    $scope.view.createPost = false;
    $scope.view.by = 'votes';
    $scope.newPost = function() { return $scope.view.createPost = !$scope.view.createPost; }
    $scope.post = function() {
      $scope.posts.push($scope.newPost);
      return $scope.newPost = {};
      // return $scope.view.createPost = !$scope.view.createPost;
    }
    $scope.sorter = function(b) {
      return $scope.view.by = b;
    }
  }])
