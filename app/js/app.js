'use strict';


// Declare app level module which depends on filters, and services
angular.module('mustacheApp', [
        'ngRoute',
        'mustacheApp.filters',
        'mustacheApp.services',
        'mustacheApp.directives',
        'mustacheApp.controllers'
    ]).
    config(['$routeProvider', '$locationProvider', '$httpProvider', 
        function ($routeProvider, $locationProvider, $httpProvider) {

        $routeProvider.when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl',
        });
        $routeProvider.otherwise({
            redirectTo: '/home',
        });
}]);