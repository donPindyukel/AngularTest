// initialize material design js
$.material.init();

angular.module('ngFit', [])
.controller("AppCtrl",function($scope){
	$scope.title = "Hello World!";
	$scope.enterOver = function(){
		console.log("yeeep");
	}
})
.directive("example", function(){
	return {
		restrict:"EA",
		scope: {},
		transclude: true,
		template:"<h3>This is new directive</h3><ng-transclude></ng-transclude>",
		controller: function($scope) {
						$scope.abilities = [];

						this.addStrength = function(){
							$scope.abilities.push("strength");
						};
						this.addSpeed = function(){
							$scope.abilities.push("speed");
						};
						this.addFlight = function(){
							$scope.abilities.push("flight");
						};
		},
	
		link: function(scope,element, attrs) {
			element.addClass("btn btn-default");
			element.bind("mouseenter", function(){
				console.log(scope.abilities);
			});
		}
	}	
})
.directive("speed", function(){
	return {
			require:"example",
			link: function(scope,element, attrs, exampleCtrl){
				exampleCtrl.addSpeed();
			}
	}

})
.directive("flight", function(){
	return {
			require:"example",
			link: function(scope,element, attrs, exampleCtrl){
				exampleCtrl.addFlight();
			}
	}
})
.directive("strength", function(){
	return {
			require:"example",
			link: function(scope,element, attrs, exampleCtrl){
				exampleCtrl.addStrength();
			}
	}
})
.directive("enter", function(){
	return {
			link: function(scope,element, attrs){
				console.log(attrs);
				element.bind("mouseenter",function(){
					element.addClass(attrs.enter);
				});
			
			}
	};
})
.directive("leave", function(){
	return {
			link: function(scope,element, attrs){
				console.log(attrs);
				element.bind("mouseleave",function(){
					element.removeClass(attrs.enter);
				});
			
			}
	};
});


/**
 * Created by szaharov on 28/05/15.
 */

/**
 * Created by szaharov on 28/05/15.
 */
