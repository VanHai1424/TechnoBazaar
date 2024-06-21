app.controller("editProCtrl", function($scope, $rootScope, $http, $location, $routeParams) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;

    $scope.listDm = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/categories"
    }) 
    .then(res => $scope.listDm = res.data)
    .catch(err => console.log(err))

    $http({
        method: "GET",
        url: "http://localhost:3000/products",
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
            url: "http://localhost:3000/products/"+$routeParams.id,
            data: $scope.data
        })
        .then(res => {
            alert('Sửa sản phẩm thành công !');
            $location.path('/admin/san-pham');
        })
    }
})