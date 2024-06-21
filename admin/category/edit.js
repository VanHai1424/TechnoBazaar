app.controller("editCateCtrl", function($scope, $http, $rootScope, $location, $routeParams) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;

    $http({
        method: "GET",
        url: "http://localhost:3000/categories",
        params: {
            id: $routeParams.id
        }
    })
    .then(res => {
        $scope.input = res.data[0];
    })
    .catch(err => console.log(err))

    $scope.update = function() {
        $scope.data = {...$scope.input};
        $http({
            method: "PUT",
            url: "http://localhost:3000/categories/" + $routeParams.id,
            data: $scope.data
        })
        .then(res => {
            alert('Sửa danh mục thành công !');
            $location.path("/admin/danh-muc");
        })
        .catch(err => console.log(err))
    }
})