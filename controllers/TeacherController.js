SignIn.controller('TeacherCtrl', function TeacherCtrl($scope, PlayerFactory){
  $scope.students = PlayerFactory.students;
  $scope.PlayerFactory = PlayerFactory;
});
