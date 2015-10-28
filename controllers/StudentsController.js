SignIn.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, PlayerFactory){
  $scope.students = PlayerFactory.students;
  $scope.PlayerFactory = PlayerFactory;
});
