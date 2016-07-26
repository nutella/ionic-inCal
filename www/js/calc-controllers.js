(function() {
'use strict';
    
angular.module('inCal').controller('calcController',calcController);

calcController.$inject= ['$scope','$ionicModal'];

function calcController($scope,$ionicModal) {
    var vm = this;
    vm.num = num;
    vm.comma = comma;
    vm.calc = calc;
    vm.result = result;
    vm.clear = clear;

	init();
	
	function init() {
		vm.temp = 0;
		vm.display = 0;
		vm.operator = '';
		vm.reset = false;
	}

	$ionicModal.fromTemplateUrl('templates/info.html', {
    	scope: $scope
	}).then(function(modal) {
    	vm.modal = modal;
  	});

	function num(digit) {
		console.log('dd '+digit);
		if ( vm.reset ) {
			vm.display = 0;
			vm.reset = false;
		}
		var foo = vm.display + '';
		if ( vm.display == 0 && foo.length == 1 ) {
			vm.display = digit;
		} else {
			vm.display = vm.display + '' + digit;
		}
	}

	function comma() {
		var foo = vm.display + '';
		if ( foo.indexOf('.') == -1 ) {
			vm.display = vm.display + '.';
		}
	}

	function clear() {
		init();
	}

	function calc(operator) {
		if ( vm.operator != '' ) {
			result();
			vm.operator = operator;
		} else {
			vm.operator = operator;
			vm.temp = vm.display;
			vm.display = 0;
		}
	}

	function result() {
		var foo = new Decimal(vm.temp);
		var bar = new Decimal(vm.display);
		switch (vm.operator) {
		case '+':
			vm.display = foo.plus(bar) * 1;
			break;
		case '-':
			vm.display = foo.minus(bar) * 1;
			break;
		case '*':
			vm.display = foo.times(bar) * 1;
			break;
		case '/':
			vm.display = foo.dividedBy(bar) * 1;
			break;
		}
		vm.temp = vm.display;
		vm.operator = '';
		vm.reset = true;
	}

}

})();