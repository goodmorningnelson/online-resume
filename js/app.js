//need controller for things to work.
angular.module('online-resume', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

angular.module('online-resume').controller('appCtrl',function ($scope) {
    //angular media querry
    $scope.infoItemModel1 = true;
    $scope.infoItemModel2 = true;
    $scope.infoItemModel3 = true;
    $scope.infoItemModel4 = true;

    $scope.workItemModel1 = true;
});
