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

angular.module('BindingApp',[])
.controller("BindingController",BindingController);

BindingController.$inject=["$scope"];
function BindingController($scope){
	$scope.firstName = "Kapil";
	// $scope.fullName = "";

	$scope.showWatchers =function(){
		console.log('# of Watcher: ',$scope.$$watchersCount);
	};

	$scope.setFullName= function(){
		$scope.fullName = $scope.firstName + " "+"Bansal";
	};

	$scope.logFirstName = function(){
		console.log("First Name is: ",$scope.firstName);

	};

	$scope.logFullName = function(){
		console.log(" Full Name is: ",$scope.fullName);
	}
}

angular.module('ShoppingListApp',[])
.controller("ShoppingListController",ShoppingListController);

var shoppingList1 = [
	"Milk", "Donuts", "Cookies", "Chocolates", "Peanut", "Ice Cream", "Dosa", "Pav Bhaji"
];

var shoppingList2 = [
	{
		name: "Milk",
		quantity: "3"
	},
	{
		name: "Donuts",
		quantity: "150"
	},
	{
		name: "Cookies",
		quantity: "43"
	},
	{
		name: "Chocolates",
		quantity: "6"
	},
	{
		name: "Dosa",
		quantity: "2"
	}
];
ShoppingListController.$inject=["$scope"];
function ShoppingListController($scope){
	$scope.shoppingList1=shoppingList1;
	$scope.shoppingList2=shoppingList2;

	$scope.addToList = function(){
		var item = {
			name: $scope.newItemName,
			quantity: $scope.newItemQuantity
		};

		$scope.shoppingList2.push(item);
	};
}

var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number Array: ", numArray);

function above5(value){
	return value>5;
}

var filteredArray = numArray.filter(above5);
console.log("Filtered Array",filteredArray);

var searchvalue = "Ice";
function contains(value){
	return value.indexOf(searchvalue) !==-1;
}

var seachedshoppingList = shoppingList1.filter(contains);

console.log("Filtered List",seachedshoppingList);
})();