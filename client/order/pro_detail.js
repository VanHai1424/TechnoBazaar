app.controller("chiTietCtrl", function($scope, $http, $routeParams, $rootScope, $location) {
    $scope.sp = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/products",
        params: {
            id: $routeParams.id_pro
        }
    })
    .then(res => {
        $scope.sp = res.data[0];
        $scope.idDanhMuc = res.data[0]['idDanhMuc'];

        $scope.inputQuantity = 1;
        $scope.qty = function(value) {
            if(value == 'tang') {
                if($scope.inputQuantity >= $scope.sp.quantity) {
                    $scope.inputQuantity = $scope.sp.quantity
                } else {
                    $scope.inputQuantity++;

                }
            } else {
                if($scope.inputQuantity <= 1) {
                    $scope.inputQuantity = 1
                } else {
                    $scope.inputQuantity--;
                }
                
            }
        }

        $scope.listSpRelated = [];
        $http({
            method: "GET",
            url: "http://localhost:3000/products",
            params: {
                idDanhMuc: $scope.idDanhMuc,
                id_ne: $routeParams.id_pro
            }
        })
        .then(res => $scope.listSpRelated = res.data)
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))

    $scope.addToCart = function(id, qty) {
        $http({
            method: "GET",
            url: "http://localhost:3000/products",
            params: {
                id: id
            }
        })
        .then(res => {
            $scope.newSp = {...res.data[0], "qty": qty};
            let index = $rootScope.cart.findIndex(item => item.id == $scope.newSp.id);
            if(index != -1) {
                $rootScope.cart[index].qty += qty;
            } else {
                $rootScope.cart.push($scope.newSp);
            }
            alert('Thêm thành công !');
        })
        .catch(err => console.log(err))
        
    }

    $scope.buyNow = function(id, qty) {
        $scope.addToCart(id, qty);
        $location.path("/thanh-toan");
    }
    
})