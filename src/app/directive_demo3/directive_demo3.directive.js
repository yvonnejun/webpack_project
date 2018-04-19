/**
 * Created by DELL-PC on 2017/7/15.
 */

import { directiveDemo3Controller as controller } from './directive_demo3.controller'
import template from './directive_demo3.html'

export const directiveDemo3Directive = function () { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template,
        controller,
        transclude:true,
        restrict: 'E',
    }
}