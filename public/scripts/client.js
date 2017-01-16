var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/employees', {
            templateUrl: '/views/templates/employees.html',
            controller: 'EmployeeController',
            controllerAs: 'ac'
        })
        .when('/budgets', {
            templateUrl: '/views/templates/budgets.html',
            controller: 'BudgetController',
            controllerAs: 'bc'
        })
        .otherwise({
            redirectTo: 'employees'
        });
}]);
