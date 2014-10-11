angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLink($scope.link)
      .then(function(resp) {
        console.log(resp);
        $location.path('/links');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

});

