(function(){
'use strict';

angular.module('FirstApp',[])

.controller('MyFirstController',function($scope){
 $scope.name="";
 
 var items=$scope.name.split(',');

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

angular.module('DIAPP',[])
.controller('DIController',DIController);

DIController.$inject=["$scope","$filter"];

function DIController($scope,$filter){
	$scope.name ="Kapil";
	$scope.upper=function(){
		var upCase= $filter('uppercase');
		$scope.name=upCase($scope.name);
	};
}

angular.module('MsgApp',[])
.controller('MsgController',MsgController);

MsgController.$inject=["$scope"];
function MsgController($scope){
	$scope.name ="Kapil";
	$scope.say=function(){
		return "Kapil likes _."
	};
}

angular.module('FilterApp',[])
.controller('LoveController',LoveController)
.filter('loves',LovesFilter)
.filter('truth',TruthFilter);

LoveController.$inject=["$scope","lovesFilter"];

function LoveController($scope,lovesFilter){
	$scope.name ="Rohan";
	$scope.msg= $scope.name +" likes Sohan.";
	$scope.loves= lovesFilter($scope.msg);
}

function LovesFilter() {
	return function (input){
		input = input || "";
		input = input.replace("likes","loves");
		return input;
	};
}

function TruthFilter(){
	return function (input, target, replace){
		input = input || "";
		input = input.replace(target,replace);
		return input;
	};
}

angular.module('CounterApp', [])
.controller('CounterController',CounterController);

CounterController.$inject=["$scope",'$timeout'];

function CounterController($scope){
	// $scope.onceCounter = 0;
	$scope.counter = 0;
	// $scope.name="Kapil";

	// $scope.showWatchers=function(){
	// 	console.log("no. of watchers",$scope.$$watchersCount);
	// };

	// $scope.countOnce= function(){
	// 	$scope.onceCounter=1;
	// };

	$scope.upCounter =function(){
		$timeout(function(){
			$scope.counter++;
			console.log("Counter incremented!");
		},2000);
	};

	// $scope.upCounter =function(){
	// 	setTimeout(function(){
	// 		$scope.$apply(function(){
	// 			$scope.counter++;
	// 			console.log("Counter incremented!");
	// 		});
	// 	},2000);
	// };

	// Why apply -- So that any exceptions thrown are also visible to angular
	// $scope.upCounter =function(){
	// 	setTimeout(function(){
	// 		$scope.counter++;
	// 		console.log("Counter incremented!");
	// 		$scope.$digest(); // So that the digest cycle is called in first time too
	// 	},2000);
	// };

	// $scope.upCounter =function(){
	// 	$scope.counter++
	// };

	// $scope.$watch(function(){
	// 	console.log("Digest Loop Fired");
	// })

	// $scope.$watch('onceCounter',function(newValue,oldValue){
	// 	console.log("onceCounter old value: ", oldValue);
	// 	console.log("onceCounter new value: ", newValue);
	// });

	// $scope.$watch('counter',function(newValue,oldValue){
	// 	console.log("counter old value: ", oldValue);
	// 	console.log("counter new value: ", newValue);
	// });
}

})();