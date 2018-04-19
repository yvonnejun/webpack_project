class directiveDemo2Controller{
    constructor ($scope) {
        console.log('-------------------demo2 start!--------------------');

        $scope.myTitle = '指令的第二个标题2';
        $scope.myContent = '22222222222222222222222222测试内容222222222222222222';
        $scope.myClick = function () {
            alert('指令2点击测试');
        }
    }
}
directiveDemo2Controller.$inject = ['$scope'];
// export { directiveDemo1Controller }
export { directiveDemo2Controller }