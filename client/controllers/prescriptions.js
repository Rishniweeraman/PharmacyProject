/**
 * Created by Admin on 7/1/2017.
 */
var myApp=angular.module('myApp');

myApp.controller('PrescriptionController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('PrescriptionController load..');
    $scope.getPrescriptions=function () {
        $http.get('/api/prescriptions').success(function (response) {
            $scope.prescriptions=response;
        });
    }

    $scope.getDrugs=function() {

        $http.get('api/drugs').then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.drugs=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getDrugs')
        }

    }

    $scope.getPrescriptionsByPatientId=function (searchValue) {
        console.log('test')
        $http.get('/api/prescription/'+searchValue).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.prescriptions=response.data;
            console.log($scope.prescriptions);

        }
        function errorCallback(error)
        {
            console.log('err from getDrugs')
        }

    }

    $scope.getByID=function () {
        var id=$routeParams.id;
        console.log(id);
        $http.get('/api/prescriptiondetails/'+id).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.pres=response.data;
            console.log($scope.pres);

        }
        function errorCallback(error)
        {
            console.log('err from getDrugs')
        }

    }
}]);