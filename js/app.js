//need controller for things to work.

function TodoCtrl($scope) {
    $scope.totalTodos = 4;

    $scope.todos = [
      {text: 'learn AngularJS', done:false},
      {text:'Build and app', done:false}
    ];
}
