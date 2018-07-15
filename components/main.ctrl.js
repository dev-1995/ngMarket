 
marketApp.controller("mainCtrl",['$scope','$rootScope','$http','$state','$location',function($scope,$rootScope,$http,$state,$location){
	$scope.coinList = [];
	$scope.currencyData = {};
	$scope.currency = 'INR';
	$scope.currencyArr = ['INR','USD','EUR'];
	$scope.home = true;
	$scope.notes = [];
	$scope.getResult = function (currency = $scope.currency) {
		$http.get('https://api.coinmarketcap.com/v2/ticker/?convert='+currency+'&limit=20&sort=id').then(function(response){
		$scope.coinList = response.data.data;
		// console.log(response.data.data);
		// console.log('init');
		
	}).catch(function (err) {
	console.log(err);
	})
	}
	$scope.saveNote = function (event) {
		console.log(event.target.id);
		localStorage.setItem(event.target.id,event.target.value);
		// alert(localStorage.getItem(event.target.id));
	};
	$scope.getValue = function (val) {
	return localStorage.getItem(val);
	}
	$scope.getCurrencyData = function (id,currency) {
		$http.get('https://api.coinmarketcap.com/v2/ticker/'+id+'/?convert='+currency).then(function(response){
		$scope.currencyData = response.data.data;
		console.log(response.data.data);
		
	}).catch(function (err) {
	console.log(err);
	})
	}
	$scope.toggleHome = function () {
		$scope.home =!$scope.home;
	}
	

	$scope.$on('$locationChangeStart', function(event) {
    //your code here
    
    if($location.path().split('/')[1] == "currency")
    {
    	$scope.getCurrencyData($location.path().split('/')[2],$location.path().split('/')[3]);

    }
    else
    {
    	$('select').formSelect();
    }

});
}])
 