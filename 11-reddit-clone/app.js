angular.module('RedditClone', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.posts = [];
    $scope.sortPosts = {};
  }])
