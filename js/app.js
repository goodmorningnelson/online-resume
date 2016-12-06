//need controller for things to work.
angular.module('online-resume', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('online-resume').controller('appCtrl',['$scope','$window',function ($scope,$window) {
    //angular media querry
    console.log($window.width,$window);

    $scope.infoItemModel1 = true;
    $scope.infoItemModel2 = true;
    $scope.infoItemModel3 = true;
    $scope.infoItemModel4 = true;

    $scope.workItemModel1 = true;
    $scope.workItemModel2 = true;
    $scope.workItemModel3 = true;
    $scope.workItemModel4 = true;
    $scope.workItemModel5 = true;
    $scope.workItemModel6 = true;
    $scope.workItemModel7 = true;
    $scope.workItemModel8 = true;
    $scope.workItemModel9 = true;
}]);


//$window.width
