class directivemyCanvas1Controller{
    constructor ($scope) {
        console.log('-------------------myCanvas1 start!--------------------');
        console.log('本例没有控制器，只有指令里面的link函数控制DOM的操作');


    }
}
directivemyCanvas1Controller.$inject = ['$scope'];
// export { directiveDemo1Controller }
export { directivemyCanvas1Controller }