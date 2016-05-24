var userApp = angular.module('userApp', [
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate',
    'ngResource'
]);

var baseURL = window.location.origin;
var pathArray = window.location.pathname.split('/');
//var projectPath = '/'+pathArray[1]+'/'+pathArray[2];
var projectPath = '/' + pathArray[1];

userApp.config(['$routeProvider',
    function ($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/canvasModel/canvasModel.html',
                controller: 'canvasModelController'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);
