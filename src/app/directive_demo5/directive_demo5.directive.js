/**
 * Created by DELL-PC on 2017/7/15.
 */

import { directiveDemo5Controller as controller } from './directive_demo5.controller'
import { directiveDemo3Directive } from '../directive_demo3/directive_demo3.directive'
import template from './directive_demo5.html'

export const directiveDemo5Directive = function () { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template,
        controller,
        // require: '?directiveDemo3Directive', // 前面代?号，若没找到这个指令，则下面的ctrl参数会输出一个null值。在模块化的项目中，各个模块相对独立，不推荐模块之间的数据通过这种指令间的通讯方式来互相传递
        require: '?ngModel', // 注入成功的前提是，在调用该指令标签的地方一定得加上ng-model=''属性，否则无效且报错(加?号不报错则返回null)实战中是经常注入ngModel内置指令，并用link函数的第四个参数来获取ngModel的内置方法来使用，常见于表单验证场景
        // require: ['?directiveDemo3Directive'],
        restrict: 'E',
        link: function (scope, ele, attrs, ctrl) {
            console.log(ctrl);
            // scope.myClick5 = function () {
            //     ctrl.myClick();
            // }
        }
    }
}