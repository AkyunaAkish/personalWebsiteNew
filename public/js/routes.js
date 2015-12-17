app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/about.html',
    controller: 'AboutController'
  })
  .otherwise({redirectTo:'/'});


})
