app.controller('checkoutCtrl', function($scope, $rootScope, $http, $location) {
    $scope.listSp = $rootScope.cart;
    $scope.totalPrice = $scope.listSp.reduce((total, sp) => {
        return total + sp.price * sp.qty;
    }, 0);

    $scope.checkout = function() {
        $http({
            method: "POST",
            url: "http://localhost:3000/order",
            data: { ...$scope.input, total: $scope.totalPrice }
        })
        .then(res => {
            const orderID = res.data.id;
            const promises = $scope.listSp.map(pro => {
                return $http({
                    method: "POST",
                    url: "http://localhost:3000/orderDetail",
                    data: {
                        quantity: pro.qty,
                        idPro: pro.id,
                        idOrder: orderID
                    }
                });
            });

            Promise.all(promises)
                .then(res => {
                    alert("Đặt hàng thành công!");
                    $rootScope.cart = []; 
                    $scope.$apply(function() {
                        $location.path("/trang-chu");
                    });
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
    };
});
