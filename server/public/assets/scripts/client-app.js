var myApp = angular.module('myApp', []);

myApp.controller('FirstController', ['$scope', '$http', function($scope, $http){

    $scope.getData = function(){
        $http.get("/students").then(function(response){
            $scope.listAll = response.data;
        });
    };

    $scope.getData();
}]);
