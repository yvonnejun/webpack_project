/**
 * Created by DELL-PC on 2017/7/15.
 */
import { directivemyCanvas1 } from './directive_myCanvas1.directive'
import { myCanvas1 } from './directive_myCanvas1transclude.directive'

export default angular.module('directiveCanvas1', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('canvas1',{
            url: '/canvas1',
            views: {
                'demoView': {
                    // 演示指令controller函数中的参数
                    template: '<directivemycanvas1><mycanvas1 ng-model="config" config="config"></mycanvas1></directivemycanvas1>',
                }
            }
        })
    }])
.directive('directivemycanvas1', directivemyCanvas1) 
.directive('mycanvas1', myCanvas1) 
.name



