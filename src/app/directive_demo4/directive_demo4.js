/**
 * Created by DELL-PC on 2017/7/15.
 */
import { directiveDemo4Directive } from './directive_demo4.directive'
import { directive4transclude } from './directive_demo4transclude.directive'

export default angular.module('directiveDemo4', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('demo4',{
            url: '/demo4',
            views: {
                'demoView': {
                    // 演示指令scope:true传值
                    template: '<directivedemodirective4><directive4transclude></directive4transclude></directivedemodirective4>',
                }
            }
        })
    }])
.directive('directivedemodirective4', directiveDemo4Directive) 
.directive('directive4transclude', directive4transclude) 
.name



