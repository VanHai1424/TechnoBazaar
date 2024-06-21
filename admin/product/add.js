app.controller("addProCtrl", function($scope, $http, $rootScope, $location) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;
    $scope.listDm = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/categories"
    }) 
    .then(res => $scope.listDm = res.data)
    .catch(err => console.log(err))

    $scope.add = function() {
        $scope.data = {...$scope.input};
        $http({
            method: "POST",
            url: "http://localhost:3000/products",
            data: $scope.data
        })
        .then(res => {
            alert('Thêm sản phẩm thành công !');
            $location.path('/admin/san-pham');
        })
    }
})