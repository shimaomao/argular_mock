'use strict';

 angular.module('sbAdminApp',['highcharts-ng'])
 .controller('AndroidQueryCtrl', function ($scope,$state,chartService) {
    $scope.versions = [
        {
            name:'9.8.0.21',
            id:'2131313'
        },
        {
            name:'9.8.0.31',
            id:'2131333'
        }
    ];
    $scope.types = [
        {
            name:'版本质量得分',
            id:'0'
        },
        {
            name:'过程质量得分',
            id:'1'
        }
    ];
    


});