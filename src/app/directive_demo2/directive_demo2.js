/**
 * Created by DELL-PC on 2017/7/15.
 */
import { directiveDemo2Directive } from './directive_demo2.directive'

export default angular.module('directiveDemo2', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('demo2',{
            url: '/demo2',
            views: {
                'demoView': {
                    // 演示指令scope:true传值
                    template: '<directivedemodirective2></directivedemodirective2>',
                }
            }
        })
    }])
.directive('directivedemodirective2', directiveDemo2Directive) 
.name



