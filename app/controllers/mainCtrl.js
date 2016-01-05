app.controller("mainCtrl",
	function($scope, $firebaseArray, AuthFactory, $http, $firebaseObject) {

  	// create new firebase ref to add to content collection
	var allrecipeRef = new Firebase("https://recepiebook.firebaseio.com/allrecipes/");
	var recipeRef = $firebaseArray(allrecipeRef);
	$scope.allrecipes = recipeRef;

		//create a new firebase ref to contact filter
  var refUrl = "https://recepiebook.firebaseio.com/users/" + AuthFactory.getUid() + "/" + $scope.contact; 	
  var userRef = new Firebase(refUrl);
	userRef = $firebaseArray(userRef);
		
  	$scope.uploadRecipe = function() {

			// create new firebase ref at the uid 
			$scope.urlToSearch = $scope.url;
			
			$http.get("http://api.embed.ly/1/extract?key=0df32a1fc8ad4ac2ace75d67f258b169&url=" + $scope.urlToSearch + "&maxwidth=500")
			.then(function(data) {

				// create object for upload with relevant info
				var dataForFirebase = {
					recipeSource: $scope.contact,
					description: data.data.description,
					images: data.data.images,
					url: data.data.original_url,
					title: data.data.title
				};

				recipeRef.$add(dataForFirebase)
				.then(function(ref) {
					console.log("refinfo", ref);
					var id = ref.key();
					userRef.$add(id)
					.then(function(id) {
					console.log("recipeInfo", id);
					});
				});
			});
		};

//uploading images with the recepie written down, string image
	$scope.doStuff = function() {
		
		var prepImage = {
			title: $scope.recipeName,
			recipeSource : $scope.contact,
			image: $scope.yourModel.base64
		};

		recipeRef.$add(prepImage)
		.then(function(ref) {
			
			var id= ref.key();
			userRef.$add(id)
			.then(function(id) {
			console.log("recipeInfo", id);
			});
		})
	};


	// search in nav bar
	$scope.submitSearch = function() {
		console.log("you clicked submit search");

		$scope.filtered = _.filter(recipeRef, function(obj) {
			if (_.includes(obj.title.toLowerCase(), $scope.searchAllRecipes.toLowerCase())) {
				console.log("obj includes", obj.title);
				return obj;
			}
		});
		$location.path('/main-page/main-page-search');
		console.log("FilteredArray", $scope.filtered);

	}; //-- end submitSearch()

});



















