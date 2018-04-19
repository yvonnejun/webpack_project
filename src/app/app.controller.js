class appController{
    constructor ($scope) {
        // alert('app start!');
        $('#testBtn').click(function(){
            alert('jquery is active');
        });
        $scope.headerloaded = function () {
            console.log('header loaded!');
        }
    }
}
appController.$inject = ['$scope'];
export default appController