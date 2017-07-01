var myApp=angular.module('myApp');
myApp.controller('EmailsController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('EmailsController');

    $scope.getEmails=function() {

        $http.get('api/email').then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.emails=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getEmails')
        }

    }
   /* $scope.getDrugById=function() {
        var id=$routeParams.id;

        $http.get('api/drugs/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.drug=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getDrug')
        }

    }

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

    $scope.updateDrug=function() {
        var id=$routeParams.id;

        $http.put('api/drugs/'+id,$scope.drug).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#/drugs";
        }
        function errorCallback(error)
        {
            console.log('err from updateDrug')
        }

    }

    $scope.deleteDrug=function(id) {


        $http.delete('api/drugs/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#/drugs";
        }
        function errorCallback(error)
        {
            console.log('err from deleteDrug')
        }

    }
*/
}])