app.controller('dangNhapCtrl', function($scope, $http, $rootScope, $location) {
    $rootScope.showHeader = false;
    $scope.input = {
        user: '',
        pass: ''
    };
    $scope.login = function() {
        if($scope.input.user === "") {
            $scope.mess = "Nhập tên đăng nhập";
        }
        else if($scope.input.pass === "") {
            $scope.mess = "Nhập mật khẩu";
        }
        else {
            $scope.user = { ...$scope.input };
            $http({
                method: "GET",
                url: "http://localhost:3000/user"
            })
            .then(res => {
                const user = res.data.find(user => user.user == $scope.input.user && user.pass == $scope.input.pass);
                console.log(user);
                if(user) {
                    alert('Đăng nhập thành công');
                    $rootScope.user = user;
                    $location.path('/trang-chu');
                } else {
                    $scope.mess = "Sai tài khoản hoặc mật khẩu";
                }
            })
            .catch(err => console.log(err));
        } 
    };
});
