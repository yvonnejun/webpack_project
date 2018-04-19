class directiveDemo1Controller{
    constructor ($scope) {
        console.log('-------------------demo1 start!--------------------');

        $scope.myContent = '测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容测试内容';
        $scope.myClick = function () {
            alert('指令1点击测试');
        }
    }
}
directiveDemo1Controller.$inject = ['$scope'];
// export { directiveDemo1Controller }
export default directiveDemo1Controller