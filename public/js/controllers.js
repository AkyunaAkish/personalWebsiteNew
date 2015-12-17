app.controller('AboutController', function($scope, $http){
  $scope.message = "about";
  $http.get('/api/v1/guitars').then(function(response){
    $scope.guitars = response.data;
    console.log($scope.guitars)

  })
});
