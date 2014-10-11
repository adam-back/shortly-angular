angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = [];

  $scope.getLinks = function() {
    //make a http request
    Links.getLinks()
      .then(function(resp) {
        for(var i = 0; i < resp.length; i++) {
          $scope.data.push(resp[i]);
        }
        // maybe need redirect to same page?
        // $location.path('/link');x`
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();
});
