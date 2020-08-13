(function(){
'use strict';

// angular.module('FilterApp',[])
// .controller('LoveController',LoveController)
// .filter('loves',LovesFilter)
// .filter('truth',TruthFilter);

// LoveController.$inject=["$scope","lovesFilter"];

// function LoveController($scope,lovesFilter){
// 	$scope.name ="Rohan";
// 	$scope.msg= $scope.name +" likes Sohan.";
// 	$scope.loves= lovesFilter($scope.msg);
// }

// function LovesFilter() {
// 	return function (input){
// 		input = input || "";
// 		input = input.replace("likes","loves");
// 		return input;
// 	};
// }

// function TruthFilter(){
// 	return function (input, target, replace){
// 		input = input || "";
// 		input = input.replace(target,replace);
// 		return input;
// 	};
// }

// angular.module('CounterApp', [])
// .controller('CounterController',CounterController);

// CounterController.$inject=["$scope",'$timeout'];

// function CounterController($scope){
// 	// $scope.onceCounter = 0;
// 	$scope.counter = 0;
// 	// $scope.name="Kapil";

// 	// $scope.showWatchers=function(){
// 	// 	console.log("no. of watchers",$scope.$$watchersCount);
// 	// };

// 	// $scope.countOnce= function(){
// 	// 	$scope.onceCounter=1;
// 	// };

// 	$scope.upCounter =function(){
// 		$timeout(function(){
// 			$scope.counter++;
// 			console.log("Counter incremented!");
// 		},2000);
// 	};

// 	// $scope.upCounter =function(){
// 	// 	setTimeout(function(){
// 	// 		$scope.$apply(function(){
// 	// 			$scope.counter++;
// 	// 			console.log("Counter incremented!");
// 	// 		});
// 	// 	},2000);
// 	// };

// 	// Why apply -- So that any exceptions thrown are also visible to angular
// 	// $scope.upCounter =function(){
// 	// 	setTimeout(function(){
// 	// 		$scope.counter++;
// 	// 		console.log("Counter incremented!");
// 	// 		$scope.$digest(); // So that the digest cycle is called in first time too
// 	// 	},2000);
// 	// };

// 	// $scope.upCounter =function(){
// 	// 	$scope.counter++
// 	// };

// 	// $scope.$watch(function(){
// 	// 	console.log("Digest Loop Fired");
// 	// })

// 	// $scope.$watch('onceCounter',function(newValue,oldValue){
// 	// 	console.log("onceCounter old value: ", oldValue);
// 	// 	console.log("onceCounter new value: ", newValue);
// 	// });

// 	// $scope.$watch('counter',function(newValue,oldValue){
// 	// 	console.log("counter old value: ", oldValue);
// 	// 	console.log("counter new value: ", newValue);
// 	// });
// }

// angular.module('BindingApp',[])
// .controller("BindingController",BindingController);

// BindingController.$inject=["$scope"];
// function BindingController($scope){
// 	$scope.firstName = "Kapil";
// 	// $scope.fullName = "";

// 	$scope.showWatchers =function(){
// 		console.log('# of Watcher: ',$scope.$$watchersCount);
// 	};

// 	$scope.setFullName= function(){
// 		$scope.fullName = $scope.firstName + " "+"Bansal";
// 	};

// 	$scope.logFirstName = function(){
// 		console.log("First Name is: ",$scope.firstName);

// 	};

// 	$scope.logFullName = function(){
// 		console.log(" Full Name is: ",$scope.fullName);
// 	}
// }

// angular.module('ShoppingListApp',[])
// .controller("ShoppingListController",ShoppingListController);

// var shoppingList1 = [
// 	"Milk", "Donuts", "Cookies", "Chocolates", "Peanut", "Ice Cream", "Dosa", "Pav Bhaji"
// ];

// var shoppingList2 = [
// 	{
// 		name: "Milk",
// 		quantity: "3"
// 	},
// 	{
// 		name: "Donuts",
// 		quantity: "150"
// 	},
// 	{
// 		name: "Cookies",
// 		quantity: "43"
// 	},
// 	{
// 		name: "Chocolates",
// 		quantity: "6"
// 	},
// 	{
// 		name: "Dosa",
// 		quantity: "2"
// 	}
// ];
// ShoppingListController.$inject=["$scope"];
// function ShoppingListController($scope){
// 	$scope.shoppingList1=shoppingList1;
// 	$scope.shoppingList2=shoppingList2;

// 	$scope.addToList = function(){
// 		var item = {
// 			name: $scope.newItemName,
// 			quantity: $scope.newItemQuantity
// 		};

// 		$scope.shoppingList2.push(item);
// 	};
// }

// var numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log("Number Array: ", numArray);

// function above5(value){
// 	return value>5;
// }

// var filteredArray = numArray.filter(above5);
// console.log("Filtered Array",filteredArray);

// var searchvalue = "Ice";
// function contains(value){
// 	return value.indexOf(searchvalue) !==-1;
// }

// var seachedshoppingList = shoppingList1.filter(contains);

// console.log("Filtered List",seachedshoppingList);


// var parent = {
// 	value: "parentValue",
// 	obj:{
// 		objValue:"parentObjValue"
// 	},
// 	walk : function(){
// 		console.log("walking!");
// 	}
// };

// var child =Object.create(parent);
// console.log("CHILD - child.value: ",child.value);
// console.log("CHILD - child.obj.objValue: ",child.obj.objValue);
// console.log("PARENT - parent.value: ",child.value);
// console.log("PARENT - parent.obj.objValue: ",parent.obj.objValue);
// console.log("parent: ",parent);
// console.log("child: ",child);

// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'childObjValue'");
// console.log("CHILD - child.value: ", child.value);
// console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
// console.log("PARENT - parent.value: ", parent.value);
// console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
// console.log("parent: ", parent);
// console.log("child: ", child)
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

//** Function constructors
// function Dog(name) {
//   this.name = name;
//   console.log("'this' is: ", this);
// }
// //
// var myDog = new Dog("Max");
// console.log("myDog: ", myDog);

// // Not being used as a function constructor
// Dog("Max2");

// angular.module('ControllerAsApp', [])
// // .controller('ParentController1', ParentController1)
// // .controller('ChildController1', ChildController1)
// .controller('ParentController2', ParentController2)
// .controller('ChildController2', ChildController2);

// ParentController1.$inject = ['$scope'];
// function ParentController1($scope) {
//   $scope.parentValue = 1;
//   $scope.pc = this;
//   $scope.pc.parentValue = 1;
// }


// ChildController1.$inject = ['$scope'];
// function ChildController1($scope) {
//   console.log("$scope.parentValue: ", $scope.parentValue);
//   console.log("CHILD $scope: ", $scope);
  
//   $scope.parentValue = 5;
//   console.log("*** CHANGED: $scope.parentValue = 5 ***");
//   console.log("$scope.parentValue: ", $scope.parentValue);
//   console.log($scope);
  
//   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
//   $scope.pc.parentValue = 5;
//   console.log("** CHANGED: $scope.pc.parentValue = 5; ***");
//   console.log("$scope.pc.parentValue: ", $scope.pc.parentValue);
//   console.log("$scope: ", $scope);
  
//   console.log("$scope.$parent.parentValue: ", $scope.$parent.parentValue);
// }

// ** Controller As syntax
// ParentController2.$inject=['scope'];
// function ParentController2() {
//   var parent = this;
//   parent.value = 1;
// }
// ChildController2.$inject = ['$scope'];
// function ChildController2($scope) {
//   var child = this;
//   child.value = 5;
//   console.log("ChildController2 $scope: ", $scope);
// }

// angular.module('ShoppingListApp', [])
// .controller('ShoppingListAddController',ShoppingListAddController)
// .controller('ShoppingListShowController', ShoppingListShowController)
// .service('ShoppingListService', ShoppingListService);

// ShoppingListAddController.$inject = ['ShoppingListService'];
// function ShoppingListAddController(ShoppingListService){
// 	var itemAdder = this;

// 	itemAdder.itemName = "";
// 	itemAdder.itemQuantity = "";

// 	itemAdder.addItem = function(){
// 		ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
// 	}
// }

// ShoppingListShowController.$inject = ['ShoppingListService'];
// function ShoppingListShowController(ShoppingListService){
// 	var showList =this;

// 	showList.items = ShoppingListService.getItems();

// 	showList.removeItem = function(itemIndex){
// 		ShoppingListService.removeItem(itemIndex);
// 	};
// }

// function ShoppingListService(){
// 	var service = this;

// 	var items=[];

// 	service.addItem = function(itemName,itemQuantity){
// 		var item = {
// 			name: itemName,
// 			quantity: itemQuantity
// 		};
// 		items.push(item);
// 	};

// 	service.removeItem = function(itemIndex){
// 		items.splice(itemIndex, 1);
// 	}

// 	service.getItems = function(){
// 		return items;
// 	};
// }

angular.module('ControllerAsApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory);

// LIST #1 - controller
ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory();

  list1.items = shoppingList.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function () {
    shoppingList.addItem(list1.itemName, list1.itemQuantity);
  }

  list1.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// LIST #2 - controller
ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list2 = this;

  // Use factory to create new shopping list service
  var shoppingList = ShoppingListFactory(3);

  list2.items = shoppingList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      shoppingList.addItem(list2.itemName, list2.itemQuantity);
    } catch (error) {
      list2.errorMessage = error.message;
    }

  }

  list2.removeItem = function (itemIndex) {
    shoppingList.removeItem(itemIndex);
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListService(maxItems) {
  var service = this;

  // List of shopping items
  var items = [];

  service.addItem = function (itemName, quantity) {
    if ((maxItems === undefined) ||
        (maxItems !== undefined) && (items.length < maxItems)) {
      var item = {
        name: itemName,
        quantity: quantity
      };
      items.push(item);
    }
    else {
      throw new Error("Max items (" + maxItems + ") reached.");
    }
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return items;
  };
}


function ShoppingListFactory() {
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };

  return factory;
}



})();