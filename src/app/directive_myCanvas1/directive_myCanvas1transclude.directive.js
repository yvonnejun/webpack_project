/**
 * Created by DELL-PC on 2017/7/15.
 */

// import { directivemyCanvas1Controller as controller } from './directive_myCanvas1.controller'
import template from './directive_myCanvas1transclude.html'

export const myCanvas1 = function () { // 注意——指令的小括号里面可以直接注入内置指令供调用
    return {
        template,
        // controller,
        require: '?ngModel', // 注入成功的前提是，在调用该指令标签的地方一定得加上ng-model=''属性，否则无效且报错(加?号不报错则返回null)实战中是经常注入ngModel内置指令，并用link函数的第四个参数来获取ngModel的内置方法来使用，常见于表单验证场景
        restrict: 'E',
        scope: {
            config: '='
        },
        replace:true, // canvas画图还是需要这个属性的
        link: function (scope, ele, attrs, ctrl) {
            // console.log(ctrl);
            console.log(ele);
            console.log(ele[0]);
            var cvs = ele[0];
            var ctx = cvs.getContext('2d');
            console.log(ctx);
            // var c = scope.config;


        }
    }
}