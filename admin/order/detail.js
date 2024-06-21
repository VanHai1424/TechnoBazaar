app.controller("orderDetailCtrl", function($scope, $http, $rootScope, $location, $routeParams) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;

    $http({
        method: "GET",
        url: "http://localhost:3000/order",
        params: {
            id: $routeParams.id
        }
    })
    .then(res => $scope.order = res.data[0])
    .catch(err => console.log(err));

    $http({
        method: "GET",
        url: "http://localhost:3000/orderDetail",
        params: {
            idOrder: $routeParams.id
        }
    })
    .then(res => {
        let listOrderDetail = res.data;
        console.log(listOrderDetail);
        $scope.listSp = [];
        listOrderDetail.forEach(order => {
            $http({
                method: "GET",
                url: "http://localhost:3000/products",
                params: {
                    id: order.idPro
                }
            })
            .then(res => {
                const product = res.data[0];
                const item = {
                    quantity: order.quantity,
                    proName: product.name,
                    proImage: product.image,
                    proPrice: product.price
                };
                $scope.listSp.push(item);
            })
            .catch(err => console.log(err));
            
        });
        console.log($scope.listSp);
    })
    .catch(err => console.log(err));
});
