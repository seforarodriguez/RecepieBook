app.controller("loginCtrl",
  function($scope, $state, $firebaseAuth, $firebaseArray) {
    
  $scope.gmailAuth = function (param) { 
        var ref = new Firebase("https://recepiebook.firebaseio.com/users");
          $scope.$parent.ref.$authWithOAuthPopup("google", function(error, auth) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              console.log("Authenticated successfully with payload:", auth);
                authData = auth;
                console.log(authData);
                $state.go('main-page');
              }
          });
      };
});


