/**
 * Created by DELL-PC on 2017/7/15.
 */

class addBookFormController {
    constructor($scope) {
        console.log('------------------addBookForm strat!-----------------');
        $scope.bookTitle = '新增书籍';
        $scope.setFormData = function () {
            alert('表单已经清空！');
        }
    }
}

addBookFormController.$inject = ['$scope'];
export default addBookFormController
