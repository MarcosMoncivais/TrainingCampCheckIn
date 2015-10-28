<<<<<<< HEAD
<<<<<<< HEAD
var SignIn = angular.module('SignIn', ['ui.router']);

SignIn.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url:'',
    templateUrl:'partials/home.html'
  });

  $stateProvider.state('sign-in', {
    url: '/sign-in',
    templateUrl: 'partials/sign-in.html',
    controller: 'StudentsCtrl'
  });

  $stateProvider.state('teacher', {
    url: '/teacher',
    templateUrl: 'partials/teacher.html',
    controller: 'TeacherCtrl'
  });



});
=======
var studentRoster = angular.module('studentRoster', []);
>>>>>>> faab53fc93a53905a272e586193939671b23c7f2
=======
var studentRoster = angular.module('studentRoster', []);
>>>>>>> faab53fc93a53905a272e586193939671b23c7f2
