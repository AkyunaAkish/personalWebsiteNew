app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: '/partials/main.html',
    controller: 'MainController'
  })
  // .when('/projects', {
  //   templateUrl: '/partials/projects.html',
  //   controller: 'ProjectsController'
  // })
  // .when('/resume', {
  //   templateUrl: '/partials/resume.html',
  //   controller: 'ResumeController'
  // })
  // .when('/contact', {
  //   templateUrl: '/partials/contact.html',
  //   controller: 'ContactController'
  // })

  .otherwise({redirectTo:'/'});

  $locationProvider.html5Mode(true);
})
