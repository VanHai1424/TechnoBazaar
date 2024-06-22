app.controller("dangKyCtrl", function($scope, $rootScope, $http, $location) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;
    $scope.dangky = function() {
        $http({
            method: "POST",
            url: "http://localhost:3000/user",
            data: $scope.input
        })
        .then(res => {
            alert('Đăng ký thành công');
            $location.path("/dang-nhap");
        })
        .catch(err => console.log(err))
    }    
})