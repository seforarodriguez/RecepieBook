app.controller("loginCtrl",
  function($scope, $firebaseAuth, $firebaseArray, $location, AuthFactory) {

  var ref = new Firebase("https://recepiebook.firebaseio.com/users");
  var fireArray = $firebaseArray(ref);
  $scope.ref = $firebaseAuth(ref);

  $scope.gmailAuth = function () { 
      $scope.ref.$authWithOAuthPopup("google").then(function(authData) {
        console.log("Logged in as:", authData);
        AuthFactory.setUid(authData.uid);
        $location.url('main-page')
      }).catch(function(error) {
        console.error("Authentication failed:", error);
      }); 
  };
});


