/**
 * Created by DELL-PC on 2017/7/15.
 */

import { directiveDemo4Controller as controller } from './directive_demo4transclude.controller'
import template from './directive_demo4transclude.html'

export const directive4transclude = function () {
    return {
        template,
        controller,
        scope:true, // 嵌套在指令中的指令，在默认false或scope:true的情况下是直接从父指令作用域中取值的
        // scope:{}, // 在独立作用域{}的情况下，还是会去指令标签的属性上去取值的
        restrict: 'E'
    }
}