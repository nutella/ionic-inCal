Decimal.config({ precision: 999 });

angular.module('inCal', ['ionic','ngAria','ngRemText'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if(window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    		cordova.plugins.Keyboard.disableScroll(true);
    	}
		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});

angular.module('inCal').config(configure);
configure.$inject= ['$ariaProvider'];

function configure($ariaProvider) {
  $ariaProvider.config({
    bindKeydown: true,
    bindRoleForClick: true
  });
}

