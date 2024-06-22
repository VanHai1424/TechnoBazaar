app.controller("sanPhamCtrl", function($scope, $http, $rootScope, $routeParams) {
    $scope.listSp = [];
    if(!$rootScope.isSearch) {
        $http({
            method: "GET",
            url: "http://localhost:3000/products",
            params: {
                idDanhMuc: $routeParams.id_cate
            }
        })
        .then(res => $scope.listSp = res.data)
        .catch(err => console.log(err))

        $scope.category = "";
        $http({
            method: "GET",
            url: "http://localhost:3000/categories/",
            params: {
                id: $routeParams.id_cate
            }
        })
        .then(res => console.log($scope.category = res.data[0]['name']))
        .catch(err => console.log(err))
    } else {
        $http({
            method: "GET",
            url: "http://localhost:3000/products"
        })
        .then(res => {
            $scope.danhSach = res.data;
            $scope.listSp = $scope.danhSach.filter(product => {
                return product.name.toLowerCase().includes($routeParams.id_cate.toLowerCase());
            })
        })
        .catch(err => console.log(err))

    }

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
                $rootScope.cart[index].qty++;
            } else {
                $rootScope.cart.push($scope.newSp);
            }
            alert('Thêm thành công !');
        })
        .catch(err => console.log(err))
        
    }
})