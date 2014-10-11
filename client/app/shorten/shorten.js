angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(link) {
    Links.addLink(link)
      .then(function(resp) {
        console.log(resp);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
