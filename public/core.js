var minimalTodo = angular.module('minimalTodo', []);

function mainController($scope, $http){
  $scope.formData = {};

  $http.get('/api/todos')
    .success(function(data){
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data){
      console.log('Error: ' + data);
    });

    $scope.createToDo = function(){
      console.log("Attempting to create a ToDo");
      $http.post('/api/todos', $scope.formData)
        .success(function(data){
          $scope.formData = {};
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
    };

    $scope.deleteToDo = function(id) {
      $http.delete('/api/todos/' + id)
        .success(function(data){
          $scope.todos = data;
          console.log(data);
        })
        .error(function(data){
          console.log('Error: ' + data);
        });
    };

}
