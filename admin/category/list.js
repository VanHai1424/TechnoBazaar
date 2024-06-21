app.controller("listCateCtrl", function($scope, $http, $rootScope) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;
    $scope.listDm = [];
    $scope.search = "";
    
    $scope.getData = function() {
        $http({
            method: "GET",
            url: "http://localhost:3000/categories"
        })
        .then(res => $scope.listDm = res.data)
        .catch(err => console.log(err))
    }
    $scope.getData();

    $scope.delete = function(id) {
        $http({
            method: "DELETE",
            url: "http://localhost:3000/categories/" + id
        })
        .then(res => {
            alert('Xóa thành công !');
            $scope.getData();
        })
        .catch(err => console.log(err))
    }
})