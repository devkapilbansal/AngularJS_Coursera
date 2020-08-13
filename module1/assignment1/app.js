(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject=["$scope","$filter"];

function LunchCheckController($scope){
 $scope.name="";
 $scope.msg="";

 $scope.check=function(){
 	var items = $scope.name.split(",");
 	var count=0;
 	for(var i=0;i<items.length;i++){
 		var item=items[i].trim();
 		if(item!=""){
 			count++;
 		}
 		else{
 			console.log("Don't use unneccessary commas as they will be ignored");
 		}
 	}
 	if(count==0){
 		$scope.msg="Please enter data first.";
 	}
 	else if(count<4){
 		$scope.msg="Enjoy!";
 	}
 	else{
 		$scope.msg="Too much!";
 	}
 }


};


})();