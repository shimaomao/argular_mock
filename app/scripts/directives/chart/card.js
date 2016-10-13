'use strict';

angular.module('sbAdminApp')
    .directive('card',function(){
        return {
            templateUrl : 'scripts/directives/chart/card.html',
            restrict : 'E',
            replace : true,
            controller : 'cardCtrl',
            scope:{
                'name':'@',
                'current':'@',
                'max':'@',
                'value' : '@',
                'trends' : '@',
                'unit' : '@',
                'calculation':'@',
                'desc' : '@',
                'stroke' :'@'
            }
        }
    })