var marketApp = angular.module('marketApp',['ui.router'])
 .config(function( $stateProvider,$urlRouterProvider) {
 	$urlRouterProvider.otherwise('/home');
 	
      $stateProvider
        .state('currencyDetail', {
          url: '/currency/:id/:currency',
          templateUrl: 'components/templates/currencyDetail.tpl.html',
            
        })
        .state('currencyTable', {
          url: '/home',
          templateUrl: 'components/templates/currencyTable.tpl.html',
            
        })
       
       
    });
 