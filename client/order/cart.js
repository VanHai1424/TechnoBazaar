app.controller("cartCtrl", function ($scope, $http, $rootScope, $location) {
    $scope.listSp = $rootScope.cart;
    $scope.qty = function (value, id) {
        let index = $scope.listSp.findIndex(item => item.id == id);
        if (value == 'tang') {
            if ($scope.listSp[index].qty >= $scope.listSp[index].quantity) {
                $scope.listSp[index].qty = $scope.listSp[index].quantity
            } else {
                $scope.listSp[index].qty++;
            }
        } else {
            if ($scope.listSp[index].qty <= 1) {
                $scope.listSp[index].qty = 1
            } else {
                $scope.listSp[index].qty--;
            }

        }
        $scope.totalPrice = $scope.listSp.reduce((total, sp) => {
            return total + sp.price * sp.qty;
        }, 0);
    }
    $scope.totalPrice = $scope.listSp.reduce((total, sp) => {
        return total + sp.price * sp.qty;
    }, 0);

    $scope.remove = function(id) {
        let index = $scope.listSp.findIndex(item => item.id == id);
        if (index != -1) {
            $rootScope.cart.splice(index, 1);
        }
        $scope.totalPrice = $scope.listSp.reduce((total, sp) => {
            return total + sp.price * sp.qty;
        }, 0);
    }
})  