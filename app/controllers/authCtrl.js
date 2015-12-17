app.controller("authCtrl", 
	function($scope, $state, $firebaseAuth, $location) {
	
	var ref = new Firebase("https://recepiebook.firebaseio.com/users");
	$scope.ref = $firebaseAuth(ref);

	var authData = $scope.ref.$getAuth();
	
	$scope.userAuthData = authData;

	if (authData) {
	  console.log("Logged in as:", authData.uid);
	  $state.go('main-page');
	} else {
	  console.log("Logged out");
	  $location.path('#/auth').replace();
	}

});


