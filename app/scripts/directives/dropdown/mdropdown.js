'use strict';

angular.module('sbAdminApp')
    .directive('dropdown',function(){
        return {
            templateUrl : 'scripts/directives/dropdown/dropdown.html',
            restrict : 'E',
            replace : true,
            scope:{
                'name':'@',
                'default' : '@',
                'items':'='
            }
        }
    })