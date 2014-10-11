angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here

  $scope.data = {};

  $scope.getLinks = function() {
    console.log(Links);
    //make a http request
    Links.getLinks()
      .then(function(resp) {
        $scope.data.links = resp;
        // maybe need redirect to same page?
        // $location.path('/link');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.getLinks();
});
