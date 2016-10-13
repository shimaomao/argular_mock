'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'ui.date',
    'angular-loading-bar',
    'ngResource',
    'highcharts-ng'
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true
    });
    $urlRouterProvider.otherwise('/dashboard/android');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
              

                return $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                }),
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                });
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/highcharts-ng/dist/highcharts-ng.min.js'
              ]
            }),
            $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/controllers/main.js',
              'scripts/controllers/chartController.js',
              'scripts/directives/dashboard/stats/stats.js',
              'scripts/directives/chart/mchart.js',
              'scripts/factory/factory.js'
              ],
              serie:true
            });
          }
        }
      })
      .state('dashboard.android',{
        templateUrl:'views/android/dashboard.html',
        url:'/android',
        controller : 'AndroidDashCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/highcharts/highcharts.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/androidDashController.js',
                  'scripts/directives/chart/mchart.js',
                  'scripts/directives/chart/circlechart.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })
      .state('dashboard.android.detail',{
        templateUrl:'views/android/detail.html',
        url:'/detail/:versionId/:from',
        controller : 'AndroidDetailCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/cardController.js',
                  'scripts/controllers/androidDetailController.js',
                  'scripts/directives/chart/card.js',
                  'scripts/directives/popover/popoverUnsafe.js',
                  'scripts/filter/unsafe.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })
      .state('dashboard.query',{
        templateUrl:'views/common/query.html',
        url:'/query',
        controller : 'AndroidQueryCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/highcharts-ng/dist/highcharts-ng.min.js'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/directives/dropdown/mdropdown.js',
                  'scripts/controllers/androidQueryController.js',
                  'scripts/directives/dashboard/charts/charts.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
            
          }
        }
    })
      .state('dashboard.ios',{
        templateUrl:'views/ios/dashboard.html',
        url:'/ios',
        controller : 'iOSDashCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/highcharts/highcharts.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/iOSDashController.js',
                  'scripts/directives/chart/mchart.js',
                  'scripts/directives/chart/circlechart.js',
                  'scripts/factory/factory.js'
                ]
            });
          }
        }
    })

    .state('dashboard.ios.detail',{
        templateUrl:'views/tbandroid/detail.html',
        url:'/detail/:versionId/:from',
        controller : 'iOSDetailCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/cardController.js',
                  'scripts/controllers/iOSDetailController.js',
                  'scripts/directives/chart/card.js',
                  'scripts/directives/popover/popoverUnsafe.js',
                  'scripts/filter/unsafe.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })
    .state('dashboard.tbandroid',{
        templateUrl:'views/tbandroid/dashboard.html',
        url:'/tbandroid',
        controller : 'tbAndroidDashCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/highcharts/highcharts.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/tbAndroidDashController.js',
                  'scripts/directives/chart/mchart.js',
                  'scripts/directives/chart/circlechart.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })
      .state('dashboard.tbandroid.detail',{
        templateUrl:'views/tbandroid/detail.html',
        url:'/detail/:versionId/:from',
        controller : 'tbAndroidDetailCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/cardController.js',
                  'scripts/controllers/tbAndroidDetailController.js',
                  'scripts/directives/chart/card.js',
                  'scripts/directives/popover/popoverUnsafe.js',
                  'scripts/filter/unsafe.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })

    .state('dashboard.tbios',{
        templateUrl:'views/tbios/dashboard.html',
        url:'/tbios',
        controller : 'tbiOSDashCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/highcharts/highcharts.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/tbiOSDashController.js',
                  'scripts/directives/chart/mchart.js',
                  'scripts/directives/chart/circlechart.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })
      .state('dashboard.tbios.detail',{
        templateUrl:'views/tbios/detail.html',
        url:'/detail/:versionId/:from',
        controller : 'tbiOSDetailCtrl',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'ngResource.js',
              files:[
                'bower_components/angular-resource/angular-resource.min.js',
                'bower_components/jquery-ui/jquery-ui.min.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.min.js'

              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:[
                  'scripts/controllers/circleChartController.js',
                  'scripts/controllers/cardController.js',
                  'scripts/controllers/tbiOSDetailController.js',
                  'scripts/directives/chart/card.js',
                  'scripts/directives/popover/popoverUnsafe.js',
                  'scripts/filter/unsafe.js',
                  'scripts/factory/factory.js'
                ],
                serie:true
            });
          }
        }
    })

     
     
  }]);

    
