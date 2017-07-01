var myApp=angular.module('myApp');
myApp.controller('addDrugsController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('addDrugsController');


    $scope.addDrug=function() {

        $http.post('api/drugs/', $scope.drug).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#/drugs";
        }
        function errorCallback(error)
        {
            console.log('err from addDrug')
        }

    }


}])