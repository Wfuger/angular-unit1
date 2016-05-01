var moment = require('moment');
angular.module('RedditClone', [])
  .controller('mainController', ['$scope', function($scope){
    $scope.view = {};
    $scope.newPost = {};
    $scope.view.createPost = false;
    $scope.view.by = 'votes';
    $scope.view.reverse = true;
    $scope.showPost = function() { $scope.view.createPost = !$scope.view.createPost; }
    $scope.post = function() {
      $scope.newPost.votes = 0;
      $scope.newPost.date = moment().calendar();
      // $scope.newPost.comments = ['poop'];
      $scope.newPost.showTheComments = false;
      $scope.view.reverse = true;
      $scope.posts.push($scope.newPost);
      $scope.newPost = {};
    }
    $scope.addComment = function(post) {
      $scope.post.showTheComments = !$scope.post.showTheComments;
    }
    $scope.sorter = function(b) {
      b === 'votes' ? $scope.view.reverse = true : $scope.view.reverse = false;
      return $scope.view.by = b;
    }
    $scope.vote = function(vote, post) {
      return vote === 'up' ? post.votes++ : post.votes--;
    }
    $scope.posts = [
      {
        title: 'Unique New York',
        votes: 0,
        author: 'Yo momma',
        image: 'http://www.fillmurray.com/200/300',
        description: '',
        date: moment().calendar(),
        comments: []
      },
      {
        title: 'Bill Fucking Murray',
        votes: 10,
        author: 'That One Guy',
        image: 'http://www.fillmurray.com/200/302',
        description: 'The coolest man alive',
        date: moment().calendar(),
        comments: []
      },
      {
        title: 'More Bill Fucking Murray',
        votes: 5,
        author: 'Some Dude',
        image: 'http://www.fillmurray.com/200/303',
        description: 'The coolest mother fucking man alive',
        date: moment().calendar(),
        comments: []
      }
    ]
    $scope.showComments = function(post) {
      post.showTheComments = !post.showTheComments;
    }
  }])
