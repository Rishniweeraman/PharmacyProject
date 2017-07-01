var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {
	$routeProvider.when('/',{
		controller:'DrugsController',
		templateUrl:'views/pharmacyStock.html'
	})
	.when('/drugs',{
        controller:'DrugsController',
        templateUrl:'views/pharmacyStock.html'
    })
    .when('/drugs/druginfo',{
         controller:'DrugsController',
         templateUrl:'views/drugInformation.html'
    })
	.when('/drugs/details/:id',{
		controller:'PlaceOrdersController',
        templateUrl:'views/placeOrder.html'
	})
	/*.when('/emails',{
         controller:'PlaceOrdersController',
         templateUrl:'views/email.html'
    })*/
    .when('/emails',{
        controller:'EmailsController',
        templateUrl:'views/email.html'
    })
	.when('/drugs/edit/:id',{
        controller:'DrugsController',
        templateUrl:'views/drugEdit.html'
    })
    .when('/drugs/view/:id',{
        controller:'DrugsController',
        templateUrl:'views/drugView.html'
    })
    .when('/drugs/:categorys',{
            controller:'DrugsController',
            templateUrl:'views/drugName.html'
        })
	.when('/reports',{
        controller:'ReportsController',
        templateUrl:'views/report.html'
    })
        .when('/addDrug',{
            controller:'addDrugsController',
            templateUrl:'views/addDrug.html'
        })
	.otherwise({
		redirectTo:'/'
	})
})
