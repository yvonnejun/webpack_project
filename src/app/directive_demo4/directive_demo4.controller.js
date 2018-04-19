class directiveDemo4Controller{
    constructor ($scope) {
        console.log('-------------------demo4 start!--------------------');

        $scope.myTitle = '指令的第二个标题4';
        $scope.myContent = '测试内容44444444444444';
        $scope.myClick = function () {
            alert('指令4点击测试');
        }
        $scope.card = {
            name: '信用卡'
        };
    }
}
directiveDemo4Controller.$inject = ['$scope'];
// export { directiveDemo1Controller }
export { directiveDemo4Controller }