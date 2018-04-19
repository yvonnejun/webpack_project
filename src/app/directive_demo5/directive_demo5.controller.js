class directiveDemo5Controller{
    constructor ($scope, $ele, $attrs, $transclude) {
        console.log('-------------------demo5 start!--------------------');
        console.log($scope);  // 输出ChildScope对象
        console.log($scope.$resolve.$state$.name);  // 输出当前路由状态名
        console.log($scope.$resolve.$state$.url);  // 输出当前路由相对路径地址
        console.log($scope.$resolve.$stateParams);  // 输出当前路由相对路径地址
        // console.log($ele); // 输出undefined, 表示无此参数值,无意义
        // console.log($attrs); // 输出undefined, 表示无此参数值,无意义
        // console.log($transclude); // 输出undefined, 表示无此参数值,无意义
        $scope.helloText = 'Hello world!';

    }
}
directiveDemo5Controller.$inject = ['$scope'];
// export { directiveDemo1Controller }
export { directiveDemo5Controller }