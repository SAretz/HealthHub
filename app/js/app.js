(function () {
    var app = angular.module('HealthApp',['ngRoute']);

    app.config(['$routeProvider',function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                   controller: 'DashboardController',
                   templateUrl: 'app/components/dashboard/dashboard.html'
                })
            .when('/shop',
                {
                    controller: 'ShopController',
                    templateUrl: 'app/components/shop/shop.html'
                })
            .when('/hr/dashboard',
                {
                    controller: 'HR_DashboardController',
                    templateUrl: 'app/components/hr/dashboard/dashboard.html'
                });
    }])
}());
