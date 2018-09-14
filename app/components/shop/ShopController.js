(function(){
    function ShopController($scope, $http) {
        function getArticles(){
            return $http.get('http://localhost:8080/articles');
        }

        function init() {
            getArticles()
                .then(
                    function successCallback(response){
                        $scope.articles = response.data;
                        console.log(response.data);
                    },
                    function errorCallback(response){
                        alert("test");
                    });
        }

        init();
    }
    ShopController.$inject = ['$scope','$http'];

    angular.module('HealthApp').controller('ShopController',ShopController);
}());
