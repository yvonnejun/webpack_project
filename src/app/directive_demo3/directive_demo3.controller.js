class directiveDemo3Controller{
    constructor ($scope) {
        console.log('-------------------demo3 start!--------------------');

        $scope.myTitle = '指令的第二个标题3';
        $scope.myContent = '测试内容333333333333333333';
        $scope.myClick = function () {
            alert('指令3点击测试');
        }
    }
}
directiveDemo3Controller.$inject = ['$scope'];
// export { directiveDemo1Controller }
export { directiveDemo3Controller }