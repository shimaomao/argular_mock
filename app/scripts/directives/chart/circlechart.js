'use strict';

angular.module('sbAdminApp')
    .directive('circlechart',function(){
        return {
            templateUrl : 'scripts/directives/chart/circlechart.html',
            restrict : 'E',
            replace : true,
            controller : 'circleChartCtrl',
            scope:{
                'type':'@',
                'num':'@',
                'col':'@',
                'title':'@',
                'chartid':'@',
                'chartConfig':'@',
                'icon':'@',
                'current':'@',
                'max':'@',
                'color' : '@',
                'goto' : '@',
                'trends' : '@'
            }
        }
    })