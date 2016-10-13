'use strict';

 angular.module('sbAdminApp')
 .controller('AndroidDashCtrl', function ($scope,$state,QualityService,chartService) {   
    $scope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
    $scope.dropboxitemselected = function(item){
        $scope.selectedVersion = item.name;
        $scope.selectedVersionId = item.id;
        var result = QualityService.get({platform:'android',method:'score',version:item.id},function(data){
            $scope.init(data);
            $scope.drawPerf(data.data);
            $scope.drawScore(data.data);
            $scope.drawCrash(data.data);
        });
            
    };
    $scope.getData = function(){
        var result = QualityService.get({platform:'android',method:'versions'},function(data){
        $scope.versions = data.data;
        $scope.selectedVersion = $scope.versions[0].name;
        $scope.selectedVersionId = $scope.versions[0].id;
        var summary = QualityService.get({platform:'android',method:'score',version:$scope.selectedVersionId},function(data){
            $scope.init(data);
            $scope.drawPerf(data.data);
            $scope.drawScore(data.data);
            $scope.drawCrash(data.data);
        });
    });
    }
    $scope.drawPerf = function(data){
        $scope.perfScore = data.perf_info.score;
        data.perf_info.yAxis = {
            title : {
                text : '分数'
            }
        };
        data.perf_info.credits = {
            enabled: false
        }
        $scope.perfChartConfig = data.perf_info;
    };
    $scope.drawCrash = function(data){
        $scope.crashInfo = data.crash_info.crash_ratio;
        $scope.crashChartConfig = chartService.getBaseLineConfig();
        $scope.crashChartConfig.title.text = '线上崩溃率';
        $scope.crashChartConfig.yAxis = {
            title : {
                text : '百分比'
            }
        };
        var formatedData = chartService.formatData(data.crash_info.detail,'线上崩溃率');
        $scope.crashChartConfig.xAxis.categories = formatedData.categories;
        $scope.crashChartConfig.series = formatedData.series;
    };
    $scope.drawScore = function(data){
        $scope.versionScore = data.score;
        $scope.scoreChartConfig = chartService.getBaseLineConfig();
        $scope.scoreChartConfig.title.text = data.score_trends.title;
        $scope.scoreChartConfig.yAxis = {
            title : {
                text : '分数'
            }
        };
        var formatedData = chartService.formatData(data.score_trends.detail,'版本质量得分');
        $scope.scoreChartConfig.xAxis.categories = formatedData.categories;
        $scope.scoreChartConfig.series = formatedData.series;
        $scope.scoreChartConfig.options.plotOptions.series.point.events.click = function(events){
            for (var i = data.score_trends.detail.length - 1; i >= 0; i--) {
                if (data.score_trends.detail[i].version === events.point.category){
                    $state.go("dashboard.android.detail",{versionId:data.score_trends.detail[i].project_id,from:'product_quality'},{reload:true})
                }
            };
        }
        
    };
    $scope.init = function(data){
        $scope.production_quality = data.data.product_quality;
        $scope.process_quality = data.data.process_quality;
        $scope.develop_quality = data.data.dev_quality;
    };
    $scope.getData();
});