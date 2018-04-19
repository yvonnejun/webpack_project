/**
 * Created by DELL-PC on 2017/7/15.
 */

import controller from './cart.controller'
import template from './cart.html'

export const cartDirective = function () { // 注意——实测：还是这种function函数写法才能成功，上面的箭头函数写法(不推荐)不报错，但是指令出不来
    return {
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
// export const cartDirective = () =>({
//     template: temp,
//     controller: cartController,
//     restrict:'E'
// })

