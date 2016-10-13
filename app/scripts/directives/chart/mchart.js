'use strict';

angular.module('sbAdminApp')
    .directive('mchart',function(){
        return {
            templateUrl : 'scripts/directives/chart/mchart.html',
            restrict : 'E',
            replace : true,
            scope:{
                'type':'@',
                'num':'@',
                'col':'@',
                'title':'@',
                'chartid':'@',
                'chartconfig':'=',
                'icon':'@'
            }
        }
    })