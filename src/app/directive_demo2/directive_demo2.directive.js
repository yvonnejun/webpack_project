/**
 * Created by DELL-PC on 2017/7/15.
 */
// import {cartController as controller} from './cart.controller'
// import { directive_demo1Controller as controller } from './directive_demo1.controller'
import { directiveDemo2Controller as controller } from './directive_demo2.controller'
import template from './directive_demo2.html'

export const directiveDemo2Directive = function () { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template,
        controller,
        restrict: 'E',
        scope: {},
        link: function (scope, element, attrs) {

        }
    }
}