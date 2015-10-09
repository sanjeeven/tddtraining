/**
 * Created by admin on 07-10-2015.
 */

angular.module("HelloAngular",[]).
    controller("HelloAngularCtrl", function($scope){
        $scope.name = "";
        $scope.msg = "";

        $scope.sayHello = function(){
            //console.log("Hello")
            $scope.msg = "Hello " + $scope.name;

            return $scope.msg;
        }
    });
