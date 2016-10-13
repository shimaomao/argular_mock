'use strict';

 angular.module('sbAdminApp',['angular-svg-round-progressbar'])
 .controller('cardCtrl', ['$scope', '$state','$timeout','$window' ,function ($scope,$state,$timeout,$window) {
    

    // $scope.current = 27;
    // $scope.max = 100;
    $scope.Math = $window.Math;
    $scope.showPreciseCurrent = function(amount){

                $timeout(function(){
                    if(amount <= 0){
                        $scope.preciseCurrent = $scope.current;
                    }else{
                        var math = $window.Math;
                        $scope.preciseCurrent = math.min(math.round(amount * 10)/10, $scope.max);
                    }
                });
            };
    $scope.trendsStatus = 'default';
    if ($scope.trends > 0) {
        $scope.trendsStatus = 'up';
    }else if ($scope.trends < 0) {
        $scope.trendsStatus = 'down';
    };
}]);