'use strict';

angular.module('sbAdminApp')
    .directive('charts',function(){
        return {
            templateUrl : 'scripts/directives/dashboard/charts/charts.html',
            restrict : 'E',
            replace : true,
            controller : 'ChartCtrl',
            scope:{
                'source':'@',
                'type':'@'
            }
        }
    })