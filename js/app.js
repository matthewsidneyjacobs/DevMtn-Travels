angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('packages', {
              url: '/packages',
              controller: 'packagesCtrl',
              templateUrl:"../views/packages.html"
            })
            .state('locations',{
              url: '/locations',
              controller: 'locationsCtrl',
              templateUrl:"../views/locations.html"
            })
            .state('booked',{
              url: '/booked/:param',
              controller: 'bookedCtrl',
              templateUrl: "../views/booked.html"
            })
            .state('about',{
              url: '/about',
              templateUrl: "../views/about.html"
            })
            .state('adventurers',{
              url: '/adventurers',
              parent: 'home',
              templateUrl: "../views/about-adventurers.html"
            })
            .state('contact', {
              url: '/contact',
              parent: 'home',
              templateUrl: "../views/contact.html"
            });

        $urlRouterProvider
            .otherwise('/');
    });
