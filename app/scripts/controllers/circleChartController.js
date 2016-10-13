'use strict';

 angular.module('sbAdminApp',['angular-svg-round-progressbar'])
 .controller('circleChartCtrl', function ($scope,$state,chartService,$timeout,$window) {
    

    // $scope.current = 27;
    // $scope.max = 100;
    $scope.Math = $window.Math;
    $scope.showPreciseCurrent = function(amount){

                $timeout(function(){
                    if(amount <= 0){
                        $scope.preciseCurrent = $scope.current;
                    }else{
                        var math = $window.Math;
                        $scope.preciseCurrent = math.min(math.round(amount), $scope.max);
                    }
                });
            };

});