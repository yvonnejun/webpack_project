import '../lib/vendor/framework'
import '../lib/vendor/style'
import { appDirective } from './app.directive'
import cart from './cart/cart'
import addBookForm from './addBookForm/addBookForm'
import menubarleft from './menubarleft/menubarleft'
import directiveDemo from './directive_demo1/directive_demo1'
import directiveDemo2 from './directive_demo2/directive_demo2'
import directiveDemo3 from './directive_demo3/directive_demo3'
import directiveDemo4 from './directive_demo4/directive_demo4'
import directiveDemo5 from './directive_demo5/directive_demo5'
import directiveCanvas1 from './directive_myCanvas1/directive_myCanvas1'
import uiRouter from 'angular-ui-router'

var oaApp = angular.module('app',[
    cart, 
    menubarleft, 
    directiveDemo, 
    addBookForm, 
    directiveDemo2, 
    directiveDemo3, 
    directiveDemo4, 
    directiveDemo5, 
    directiveCanvas1, 
    'ui.router'
    ])
.directive('app',appDirective)
















// .config(($stateProvider, $urlRouterProvider) => {
//     $urlRouterProvider.otherwise('/'); // 实测ui.router是由默认跳转效果的
//     $stateProvider
//     .state('main',{
//         url: '/',
//         // view: {
//         //     'mainView': {
//         //         template: require('./app.html')
//         //     }
//         // }
//         // template: require('./app.html'), // 实测这样是可以直接加载到app.html文件作为模板文件的
//         // controller: appController,
//         // template: template
//         // template: '<appDirective></appDirective>'
//         views: { // 原来以前都是views写错了写成了view:程序居然也不报错
//             '': {
//                 template: '<app></app>'
//             }
//         }
//     })
// })
