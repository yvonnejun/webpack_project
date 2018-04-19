/**
 * Created by DELL-PC on 2017/7/15.
 */
import { directiveDemo3Directive } from './directive_demo3.directive'

export default angular.module('directiveDemo3', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('demo3',{
            url: '/demo3',
            views: {
                'demoView': {
                    // 演示指令scope:true传值
                    template: '<directivedemodirective3><span><i class="fa fa-area-chart" aria-hidden="true"></i>行情趋势图</span></directivedemodirective3>',
                }
            }
        })
    }])
.directive('directivedemodirective3', directiveDemo3Directive) 
.name



