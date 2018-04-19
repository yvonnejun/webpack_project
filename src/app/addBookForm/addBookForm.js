/**
 * Created by DELL-PC on 2017/7/25.
 */
// import template from './addBookForm.html'
// import {addBookFormController as controller} from './addBookForm.controller'
import { addBookFormDirective } from './addBookForm.directive'


export default angular.module("addBookForm", ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
    $stateProvider
        .state('addbook', {
            url:'/addbook',
            // template:'<addBookFormDirective></addBookFormDirective>'//实测这样写是可以的
            views: {
                'addbookView': {
                    template: '<addbookformdirective></addbookformdirective>', // 这就是坑了：指令模板字符串只能是小写，否则导入的控制器和template模板将无效也不报错
                    // template,
                    // controller
                }
            }
        });
}])
.directive('addbookformdirective',addBookFormDirective)
.name
// .directive('addBookFormDirective',function(){
//     return {
//         restrict:'AE',
//         replace:true,
//         template,
//         controller
//     }
// })

