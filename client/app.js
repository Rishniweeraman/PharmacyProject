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

	.when('/emails',{
         controller:'PlaceOrdersController',
         templateUrl:'views/email.html'
    })
    /*.when('/email',{
        controller:'EmailsController',
        templateUrl:'views/email.html'
    })*/
	.when('/drugs/edit/:id',{
        controller:'DrugsController',
        templateUrl:'views/drugEdit.html'
    })
    .when('/drugs/view/:id',{
        controller:'DrugsController',
        templateUrl:'views/drugView.html'
    })
    .when('/drug/:category',{
            controller:'DrugsController',
            templateUrl:'views/drugName.html'
    })
	.when('/reports',{
        controller:'ReportsController',
        templateUrl:'views/report.html'
    })
        .when('/addDrug',{
            controller:'DrugsController',
            templateUrl:'views/addDrug.html'
        })
        .when('/updateDrug',{
            controller:'updateDrugsController',
            templateUrl:'views/updateDrugs.html'
        })

	.otherwise({
		redirectTo:'/'
	})
})
