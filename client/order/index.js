app.controller("trangChuCtrl", function($scope, $http, $rootScope) {
    $rootScope.showHeader = true;
    $rootScope.showFooter = true;
    $http({
        method: "GET",
        url: "http://localhost:3000/products"
    })
    .then(res => $scope.listSpNew = res.data)
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
                $rootScope.cart[index].qty++;
            } else {
                $rootScope.cart.push($scope.newSp);
            }
            alert('Thêm thành công !');
        })
        .catch(err => console.log(err))
        
    }
})