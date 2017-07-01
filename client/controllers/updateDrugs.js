var myApp=angular.module('myApp');
myApp.controller('updateDrugsController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('updateDrugsController');
//update drug function
    $scope.UpdateDrug=function(id) {

        /*var updateObj = {

        }*/

        $http.put('api/drugs/'+id,$scope.drugInfo[0]).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#!/drugs";
        }
        function errorCallback(error)
        {
            console.log('err from update_Drug')
        }

    }
//pass values to name textfield
    $scope.test =function (val) {
        console.log(val);

        $http.get('/api/drug/'+val).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.drugDetails=response.data;
           console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from update_Drug')
        }

    }
//auto fill text fields
    $scope.autoFill =function (val) {
        console.log(val);

        $http.get('/api/dr/'+val).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.drugInfo=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from update_Drug')
        }

    }

}])