var myApp=angular.module('myApp');
myApp.controller('PlaceOrdersController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('PlaceOrdersController');

    $scope.getDrugById=function() {
        var id=$routeParams.id;

        $http.get('api/drugs/'+id).then(successCallback,errorCallback);

        function successCallback(response)
        {
            $scope.drug=response.data;


                $scope.from="digitalPulzPharmacy@gmail.com";
                $scope.to=$scope.drug.supplierEmail;
                $scope.subject="Drug Reorder request for "+$scope.drug.name;
                $scope.text="Dear Officer,\nThe quantites of the below drugs are low\nName:"+$scope.drug.name+"\nCategory:"+$scope.drug.category+"\nPrice(Rs):"+$scope.drug.price+"\nQuantity in hand:"+$scope.drug.quantity+"\nPlease be kind enough to send us new stocks\n\nBest Regards,\nChief Pharmacist";


            console.log($scope.subject);
        }
        function errorCallback(error)
        {
            console.log('err from getDrug')
        }

    }




    $scope.sendMail=function() {

        var  HelperOptions={
            from:$scope.from,
            to:$scope.to,
            subject:$scope.subject,
            text:scope.text
        };


        $http.post('api/emails/', $scope.HelperOptions).then(successCallback,errorCallback);
        function successCallback(response)
        {
            window.location.href="#/emails";
        }
        function errorCallback(error)
        {
            console.log('err from addEmail')
        }

    }

    $scope.getEmails=function() {

        $http.get('api/emails').then(successCallback,errorCallback);
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

}])