var myApp=angular.module('myApp');
myApp.controller('ReportsController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('ReportsController');

    $scope.getReport=function() {

        $http.get('api/reports').then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.reports=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getReport')
        }

    }

}])