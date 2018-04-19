/**
 * Created by DELL-PC on 2017/7/15.
 */

import controller from './addBookForm.controller'
import template from './addBookForm.html' // 这是一个坑：导入模板和控制器居然在页面上没反应，证明没导入成功导致页面上的指令没包含到这个模板和控制器，页面上渲染不出来。终于找到原因了,是模块文件上的指令标签引用没有全部用小写的原因，指令标签只能全部小写，否则无效  

export const addBookFormDirective = function () {
    return {
        //    template: tempaddbook,
        //    controller: addBookFormController,
        template,
        controller,
        restrict: 'E',
        link: function (scope, element, attrs) {

        }
    }
}
// export default addBookFormDirective
// export const cartDirective = () =>({
//     template,
//     controller,
//     restrict:'E'
// })
