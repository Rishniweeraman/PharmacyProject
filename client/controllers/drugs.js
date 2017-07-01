var myApp=angular.module('myApp');
myApp.controller('DrugsController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('DrugsController');

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
    $scope.getDrugById=function() {
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
    //addDrugs

    $scope.addDrug=function() {

        $http.post('api/drugs/', $scope.drug).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#!/drugs";
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
            window.location.href="#!/drugs";
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
            window.location.href="#!/drugs";
        }
        function errorCallback(error)
        {
            console.log('err from deleteDrug')
        }

    }

    $scope.getDrugsByCategory=function(category) {
        //var category=$routeParams.category;

        $http.get('api/drug/'+category).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.drugDetails=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getDrugNameByCategory')
        }

    }

    $scope.getDrugsByName=function(name) {
        console.log(name);

        $http.get('api/d/'+name).then(successCallback,errorCallback);
        function successCallback(response)
        {
            $scope.drugDetailss=response.data;
            console.log(response.data);
        }
        function errorCallback(error)
        {
            console.log('err from getDrugsByName')
        }

    }


}])