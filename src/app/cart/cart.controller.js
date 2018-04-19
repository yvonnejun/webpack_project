/**
 * Created by DELL-PC on 2017/7/15.
 */

class cartController {
    constructor($scope, $http, cartService) {
        console.log('-------------------cart start-----------------');
        $scope.total = 0;
        var len;
        cartService.getCartGoods().then(function(res){
            // console.log(res);
            $scope.goods = res.data; // 核心：后台数据一过来就赋值给了本地$scope.goods对象上，所以在没有后台数据支撑的前端逻辑处理上也只能操作$scope.goods这个数据集合了
            len = $scope.goods.length;
            for(var i = 0; i < len; i++){
                $scope.goods[i].count = $scope.goods[i].price * $scope.goods[i].number;
            }
        }, function(err){
            console.log(err);
        });
        // 全选逻辑,这个值就要在监控下捕获新值进行全选赋值了
        $scope.$watch('allcheck', function(newValue, oldValue){
            console.log(newValue);
            // console.log($scope.goods);
            $scope.checked = newValue; // 视图中的全选与下面数据中的全选标记值要同步
            if(newValue == false){
                $scope.total = 0;
                for(var i = 0; i < len; i++){
                    $scope.goods[i].checked = newValue;
                }
            }else{
                $scope.total = 0; // 全选逻辑是清0再累加
                for(var i = 0; i < len; i++){
                    $scope.goods[i].checked = newValue;
                    $scope.total += $scope.goods[i].count;
                }
            }
        });
        
        $scope.plusNumber = function(self){
            // console.log($scope.goods); // $scope.goods就是要遍历累加的对象集合

            // console.log(self.$index); // 传进来的this对象自带整个good数据对象，所以只用提取good对象数据做逻辑处理即可
            self.good.number++;
            var countValue = parseInt(self.good.number) * parseInt(self.good.price);// 用{{good.price*good.number}}表达式取代
            // self.good.count = `${countValue}元`;
            self.good.count = countValue;
            var index = self.$index;
            if($scope.goods[index].checked == true){
                $scope.total += $scope.goods[index].price;
            }
        }
        
        $scope.minusNumber = function(self){
            // console.log($scope.goods);
            // console.log(self); // 传进来的this对象自带整个good数据对象，所以只用提取good对象数据做逻辑处理即可
            if(self.good.number <= 1){
                self.good.number = 1;
                var countValue1 = parseInt(self.good.number) * parseInt(self.good.price);// 用{{good.price*good.number}}表达式取代
                self.good.count = countValue1;
            }else {
                self.good.number--;
                var countValue2 = parseInt(self.good.number) * parseInt(self.good.price);// 用{{good.price*good.number}}表达式取代
                self.good.count = countValue2;
                var index = self.$index;
                if($scope.goods[index].checked == true){
                    $scope.total -= $scope.goods[index].price;
                }
            }
            
        }
        
        
        $scope.checkItem = function(self){
            // console.log(self.good);
            if(self.good.checked == true){ //这样点击进来实际上获取的是上一次的true和false值,那怎么获得这一次的勾选值呢？$scope.checked得到的当前选中值
                // $scope.total += parseInt(self.good.number)*parseInt(self.good.price);// 计算总价的加减两个动作
                self.good.checked = false;
            }else{
                // $scope.total -= parseInt(self.good.number)*parseInt(self.good.price);
                self.good.checked = true;
            } // 因为点击复选框得到的是上一次的场景值，所以要根据上一次的值来反向设置一下，再进行true和false的判断就对了
            // console.log(self.good);
            if(self.good.checked == true){ //这样点击进来实际上获取的是上一次的true和false值,那怎么获得这一次的勾选值呢？$scope.checked得到的当前选中值
                $scope.total += parseInt(self.good.number)*parseInt(self.good.price);// 计算总价的加减两个动作
            }else{
                $scope.total -= parseInt(self.good.number)*parseInt(self.good.price);
            }
        }
    }
}

cartController.$inject = ['$scope', '$http', 'cartService'];
// export { cartController }
export default cartController
