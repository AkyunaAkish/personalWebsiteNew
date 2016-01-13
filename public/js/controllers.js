app.controller('MainController', function($scope, $http){
  // $scope.message = "about";
  // $http.get('/api/v1/guitars').then(function(response){
  //   $scope.guitars = response.data;
  //   console.log($scope.guitars)
  //
  // })





});

app.controller('ProjectsController', function($scope, $http){
  $scope.message = "projects";

});

app.controller('ResumeController', function($scope, $http){
  $scope.message = "resume";

});

app.controller('ContactController', function($scope, $http){
  $scope.message = "contact";

});
