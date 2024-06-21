app.controller("addCateCtrl", function($scope, $http, $rootScope, $location) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;

    $scope.add = function() {
        $scope.data = {...$scope.input};
        $http({
            method: "POST",
            url: "http://localhost:3000/categories",
            data: $scope.data
        })
        .then(res => {
            alert('Thêm danh mục thành công !');
            $location.path("/admin/danh-muc");
        })
        .catch(err => console.log(err))
    }
})