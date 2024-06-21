app.controller("listOrderCtrl", function($scope, $http, $rootScope, $location) {
    $rootScope.showHeader = false;
    $rootScope.showFooter = false;

    $scope.listOrder = [];
    $http({
        method: "GET",
        url: "http://localhost:3000/order"
    })
    .then(res => $scope.listOrder = res.data)
    .catch(err => console.log(err))
})