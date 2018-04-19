/**
 * Created by DELL-PC on 2017/7/15.
 */
function cartService($http, $q, $rootScope, $location, ajaxService) {
    var ajax = ajaxService.ajax;
    function getUrl(url) { // 提取url前面的公共部分和传进来的url参数进行拼装
        return url;
    }
    
    var httpObj = {
        /**
         * 接口：获取购物车货物清单
         * 
         * 
         */
        getCartGoods: function () {
            var url = getUrl('src/data/cart/goods.json'); // 实测:本地json数据这样写路径就对了,项目根目录其实是WEBPACK_DEMO_0610对应显示的是http://localhost:8801/
            return ajax({
                url: url,
                method: 'get',
                // params: params,
                // data: data
            });
        }
    }
    return httpObj;
}

cartService.$inject = ['$http', '$q', '$rootScope', '$location', 'ajaxService'];

export { cartService }
