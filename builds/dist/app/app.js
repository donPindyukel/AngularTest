// initialize material design js
$.material.init();

angular.module('ngFit', [])
.controller("AppCtrl",function($scope){
	$scope.selectArr = ["Not Awesome", "Little Awesome", "Eeee I'm Awesome"];
	
	
})
.directive("selectAwesome", function(){
	return {
		restrict:"A",
		scope:{
				selectVal: "=",
				title: "@"
		},
		//transclude:true,
		templateUrl:"select.tpl.html",
		controller: function($scope){
			$scope.selectName = $scope.title;
			$scope.model = {id:0};
			$scope.dropdown = $scope.selectVal[0];
		
		},
		link: function(scope,elem) {
			elem.bind("mouseenter", function(){

				elem.find(".dropdown-menu").show();
			});

			elem.bind("mouseleave", function(){

				elem.find(".dropdown-menu").hide();
			});
             
			
			scope.$watch(elem.find(".option"), function(){
				elem.find(".option").bind("click",function(){
					var value = angular.element(this).index();
					scope.model.id = String(value);
				    scope.dropdown = scope.selectVal[scope.model.id];
					scope.$apply();
					
				});
			});
		}
	}
});

/**
 * Created by szaharov on 28/05/15.
 */

/**
 * Created by szaharov on 28/05/15.
 */
