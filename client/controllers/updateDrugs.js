var myApp=angular.module('myApp');
myApp.controller('updateDrugsController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('updateDrugsController');

    $scope.UpdateDrug=function() {
        var id=$routeParams.id;

        $http.put('api/updateDrugs/'+id,$scope.drug).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#!/drugs";
        }
        function errorCallback(error)
        {
            console.log('err from update_Drug')
        }

    }

}])