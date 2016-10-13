'use strict';
angular.module('sbAdminApp')

.factory('QualityService', function ($resource){
    var QualityService = $resource('http://100.85.86.114\\:9090/api/v1/quality/:platform/:method/:version',{platform:'@platform',method:'@method',version:'@version'});
    QualityService.prototype.isNew = function(){
        return (typeof(this.id) === 'undefined');
    };
    return QualityService;
})

.factory('modalComfirm', function ($uibModal) {

    function _modalWindowController ($scope, $uibModalInstance,title,msg,group){
        $scope.title = title;
        $scope.msg = msg;
        $scope.group = group;
        //$scope.group.name = "";
            //console.log($scope.group);
            
            $scope.confirm = function () {
                $uibModalInstance.close();
            };

            $scope.cancel = function () {
                $uibModalInstance.dismiss();
            };
        }

        var modalWindowController = _modalWindowController;

        return {

        // Show a modal window with the specified title and msg
        show: function (title,msg,group,confirmCallback, cancelCallback) {

            var template = 'views/common/modal-view.html';
            if (msg==="") {
                template = 'views/common/modal-view-input.html';
            };
            //Show window
            var modalInstance = $uibModal.open({
                animation : true,
                templateUrl: template,
                controller: modalWindowController,
                size: 'sm',
                resolve: {
                    title : function(){
                        return title;
                    },
                    msg : function(){
                        return msg;
                    },
                    group : function(){
                        return group;
                    }
                }
            });
            // Register confirm and cancel callbacks
            modalInstance.result.then(
                // if any, execute confirm callback
                function() {
                    if (confirmCallback !== undefined) {
                        confirmCallback();
                    }
                },
                // if any, execute cancel callback
                function () {
                    if (cancelCallback !== undefined) {
                        cancelCallback();
                    }
                });
        }
    };

    


})
.factory('chartService',function(){
    return { 
        getBaseLineConfig :function (){
           var baseLineConfig = {
            chart: {
                zoomType: 'x'
            },
            credits : {
                enabled: false
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            options:{
                plotOptions: {
                    series: {
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: function(e){
                                    //
                                    
                                }
                            }
                        }
                    },
                    marker: {
                        lineWidth: 1
                    }
                }
            },
            series: [],
            xAxis: {
                type: 'category',
                categories : []
            },
            title: {
                text: ""
            }}
            return baseLineConfig;
        },
    formatData : function(data,name){
        var formatedData = {
            categories : [],
            series : [{
                data:[],
                name:""
            }]
        };
        var seriesData = [];
        for (var i = 0; i < data.length; i++) {
            formatedData.categories.push(data[i].version);
            seriesData.push(data[i].value);
        }
        formatedData.series = [{
            data:seriesData,
            name:name
        }];
        return formatedData;
    }
    };
    });
