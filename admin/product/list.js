app.controller("listProCtrl", function($scope, $http, $rootScope) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;

    $scope.search = "";
    $scope.listSp = [];
    $scope.getData = function() {
        $http({
            method: "GET",
            url: "http://localhost:3000/products"
        })
        .then(res => $scope.listSp = res.data)
        .catch(err => console.log(err))
    }

    $scope.getData();
    $scope.delete = function(id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/products/" + id
        })
        .then(res => {
            alert('Xoá thành công !');
            $scope.getData();
        })
        .catch(err => console.log(err))
    }

})