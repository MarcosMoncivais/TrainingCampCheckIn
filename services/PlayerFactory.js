SignIn.factory('PlayerFactory', function PlayerFactory(){
  var factory = {};
  factory.students = [{ name: 'Derek Carr', signedIn: false },
                      { name: 'Khalil Mack', signedIn: false },
                      { name: 'Latavius Murray', signedIn: false },
                      { name: 'Amari Cooper', signedIn: false },
                      { name: 'Charles Woodson', signedIn: false },
                      { name: 'Marcel Reece', signedIn: false }
                      ];

  factory.signIn = function(student) {
    if (student.signedIn == false) {
      student.signedIn = true;
    } else {
      student.signedIn = false;
    }
  }

  return factory;
});
