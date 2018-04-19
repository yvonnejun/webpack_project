/**
 * Created by DELL-PC on 2017/7/15.
 */
import { directiveDemo5Directive } from './directive_demo5.directive'
import { directiveDemo3Directive } from '../directive_demo3/directive_demo3.directive'

export default angular.module('directiveDemo5', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('demo5',{
            url: '/demo5',
            views: {
                'demoView': {
                    // 演示指令controller函数中的参数
                    template: '<directivedemodirective5 ng-model="params"></directivedemodirective5>',
                }
            }
        })
    }])
.directive('directivedemodirective5', directiveDemo5Directive) 
.directive('directivedemodirective3', directiveDemo3Directive) 
.name



