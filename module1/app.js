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
// .controller('DIController',['$scope', '$filter',DIController]);
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

})();