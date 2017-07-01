myApp.controller('UserController',['$scope','$http','$location','$routeParams',function($scope,$http,$location,$routeParams) {
    console.log('UserController load..');
    $scope.getUser=function () {
        $http.get('api/users').success(function (response) {
            $scope.user=response;
        });
    }

$scope.user = this;


    $scope.addUser=function(req,res) {
        //console.log('post called');
        console.log($scope.user);
       $http.post('api/users', $scope.user).then(successCallback, errorCallback);
      //  $http.post('api/users').then(successCallback, errorCallback);
        function successCallback() {
           window.location.href = "#!/users";


        }

        function errorCallback(error) {
            console.log('err from addUser')
        }
    }

    }]);