/**
 * Created by DELL-PC on 2017/7/15.
 */
// import {cartController as controller} from './cart.controller'
import menubarleftController from './menubarleft.controller'
import template from './menubarleft.html'

export const menubarleftDirective = function () { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template: template,
        controller: menubarleftController,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}