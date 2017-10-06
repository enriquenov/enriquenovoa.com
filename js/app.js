var app = angular.module('angularAddOn', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: "views/home.html"
  })
  .when('/spanish', {
    templateUrl: "views/home-spanish.html"
  })
  .otherwise ({
    redirectTo: "/"
  })
})
