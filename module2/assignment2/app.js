(function(){
	'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];

	function ToBuyController(ShoppingListCheckOffService){
		var buyer = this;

		buyer.item = '';

		buyer.additem = function(){
			ShoppingListCheckOffService.additem(buyer.item)
		}

		buyer.tobuylist = ShoppingListCheckOffService.getbuyinglist();

		buyer.bought = function(index){
			ShoppingListCheckOffService.bought(index);
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

	function AlreadyBoughtController(ShoppingListCheckOffService){
		var check = this;

		check.alreadyboughtlist=ShoppingListCheckOffService.getalreadyboughtlist();
	}

	function ShoppingListCheckOffService(){
		var service=this;

		var tobuy = ['Milk', 'Rice'];

		var alreadybought = [];

		service.additem = function(item){
			tobuy.push(item);
		};

		service.bought = function(index){
			alreadybought.push(tobuy.splice(index,1)[0]);
		};

		service.getbuyinglist = function(){
			return tobuy;
		};

		service.getalreadyboughtlist = function(){
			return alreadybought;
		}
	}


})();