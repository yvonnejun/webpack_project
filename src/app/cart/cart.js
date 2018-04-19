/**
 * Created by DELL-PC on 2017/7/15.
 */
import { cartDirective } from './cart.directive'
// import template from './cart.html'
// import { cartController as controller } from './cart.controller'
import commonService from '../service'
import { cartService } from './cart.service'

export default angular.module('cart', [commonService, 'ui.router'])
.config(['$stateProvider', function($stateProvider) {
        $stateProvider
        .state('cart', {
            url: '/cart', // 嵌套子路由是这样写的：/main/cart才行
            views: {
                'cartView': {
                    template: '<cart></cart>',
                    // template,
                    // controller
                }
            }
        })
    }])
.service('cartService', cartService)
.directive('cart', cartDirective) // 注意：还要注意指令名称最好不要同导入的指令模块同名，容易出现不报错也不出现界面的问题
.name


//export default angular.module('cart', ['ngRoute'])
//.config(($routeProvider) => {
//$routeProvider
//    .when('/', {
//        templateUrl: 'views/login.html',
//        controller: 'loginCtr',
//        controllerAs: 'login'
//    })
//    .when('/regist', {
//        templateUrl: 'views/regist.html',
//        controller: 'registCtr',
//        controllerAs: 'regist'
//    })
//    .otherwise({
//        redirectTo: '/'
//    });
//})
//.directive('cartDirective', cartDirective)
//.name

