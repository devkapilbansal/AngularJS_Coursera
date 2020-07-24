(function(){
'use strict';

angular.module('FirstApp',[])

.controller('MyFirstController',function($scope){
 $scope.name="";
 $scope.totalValue=0;

 $scope.displayNumeric=function(){
 	var totalNameValue = calculateNumeric($scope.name);
 	$scope.totalValue=totalNameValue;
 };

function calculateNumeric(string){
	var StringValue=0;
	for(var i=0; i<string.length; i++){
		StringValue+=string.charCodeAt(i);
	}

	return StringValue;
}

});


})();