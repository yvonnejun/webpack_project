/**
 * Created by DELL-PC on 2017/7/15.
 */
import { directiveDemo1Directive } from './directive_demo1.directive'

export default angular.module('directiveDemo', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('demo1',{
            url: '/demo1', // 嵌套子路由是这样写的：/main/cart才行
            views: {
                'demoView': {
                    // 演示指令标签上往指令模板里@,=,&传值
                    template: '<directivedemodirective my-title="指令1测试" my-content="myContent" my-click="myClick()"></directivedemodirective>',
                }
            }
        })
    }])
.directive('directivedemodirective', directiveDemo1Directive) 
.name



