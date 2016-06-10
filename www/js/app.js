Decimal.config({ precision: 999 });

angular.module('inCal', ['ionic','ngRemText'])

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