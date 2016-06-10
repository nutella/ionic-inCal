/**
 * ng-RemText.js v4.2.0
 * based on https://github.com/patrickmarabeas/ng-FitText.js
 *
 * Copyright 2015, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 09/06/2016
 */

(function(window, document, angular, undefined) {
'use strict';

angular.module('ngRemText', [])
	.value('remTextDefaultConfig', {
    	'delay'       : 100,
    	'loadDelay'   : 10,
    	'compressor'  : 0.1,
    	'min'         : 0,
    	'max'         : 999
	})
    .directive('remtext', [
    	'$timeout',
    	'remTextDefaultConfig',
    	'remTextConfig',
      	function($timeout, config, remTextConfig) {
        	return {
          		restrict: 'A',
          		scope: true,
          		link: function(scope, element, attrs) {
		            angular.extend(config, remTextConfig.config);
					var parent          = element.parent(),
						domElem         = element[0],
						domElemStyle    = domElem.style,
						computed        = window.getComputedStyle(element[0], null),
						loadDelay       = attrs.remtextLoadDelay || config.loadDelay,
						compressor      = attrs.remtext || config.compressor,
						min             = attrs.remtextMin || config.min,
						max             = attrs.remtextMax || config.max,
						minFontSize     = min ==='inherit'? computed['font-size'] : min,
						maxFontSize     = max ==='inherit'? computed['font-size'] : max,
						lineHeight      = computed['line-height'],
						display         = computed['display'],
						calcSize        = 3;
		            function calculate() {
        		    	var numCarAvail = parseInt(parseInt(computed.width,10) / (parseInt(computed.fontSize,10) + 10),10);
            			var carPres = domElem.innerHTML + '';
		            	var numCarPres = carPres.length;
        		    	if ( numCarPres > numCarAvail && calcSize > min ) {
            				calcSize -= compressor;
		            	}
        		    	if ( numCarPres < numCarAvail && calcSize < max ) {
            				calcSize += compressor;
		            	}
						return calcSize;
		            }
		            function resizer() {
        		    	// Don't calculate for elements with no width or height
              			if (domElem.offsetHeight * domElem.offsetWidth === 0) return;
	              		// Set standard values for calculation
              			domElemStyle.fontSize       = calcSize + 'rem';
             			domElemStyle.lineHeight     = '1';
			            domElemStyle.display        = 'inline-block';
			            // Set usage values
              			domElemStyle.fontSize       = calculate() + 'rem';
              			domElemStyle.lineHeight     = lineHeight;
              			domElemStyle.display        = display;
            			$timeout( function() { resizer() }, config.delay);
            		}
		            $timeout( function() { resizer() }, loadDelay);
		            scope.$watch(attrs.ngBind, function() { resizer() });
		        }
        	}
    	}
    ])
    .provider('remTextConfig', function() {
    	var self = this;
      	this.config = {};
      	this.$get = function() {
        	var extend = {};
        	extend.config = self.config;
        	return extend;
    	};
    	return this;
    });
})(window, document, angular);