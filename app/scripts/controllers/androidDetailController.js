'use strict';

angular.module('sbAdminApp')
    .controller('AndroidDetailCtrl',function($scope,$state,$stateParams,QualityService){

        
        var result = QualityService.get({platform:'android',method:'detail',version:$stateParams.versionId}, function(data){
            $scope.currentTab = $stateParams.from;
            $scope.isActiveTab = function(id){
                return id == $scope.currentTab;
            };
            $scope.onClickTab = function(id){
                $scope.currentTab = id;
            };
            $scope.tabs = [
            {
                name:"产品质量得分",
                id:"product_quality"
            },
            {
                name:"过程质量得分",
                id:"process_quality"
            },
            {
                name:"研发质量得分",
                id:"dev_quality"
            }

            ];
            
            $scope.result = data;
            $scope.result.product_quality = $scope.formatStandard($scope.result.product_quality);
            $scope.result.process_quality = $scope.formatStandard($scope.result.process_quality);
            $scope.result.dev_quality = $scope.formatStandard($scope.result.dev_quality);


        });

        $scope.formatStandard = function(standard){
            
            for (var i = standard.length - 1; i >= 0; i--) {
                var template = '<table>';
                var descList = standard[i].desc.split('\n');
                for (var j = descList.length - 1; j >= 0; j--) {
                    template += '<tr><td class="text-left">' + descList[j] + '</td></tr>';
                }
                template += '</table>';
                standard[i].desc = template;

            }
            return standard;
        }

    });