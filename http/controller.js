angular.module("MyFirstApp",[])
	.controller("FirstController", function ($scope, $http){
		$scope.posts=[];
		$scope.addPost = {};
		$http.get("http://jsonplaceholder.typicode.com/posts")
			.success(function(data){
				$scope.posts=data;				
			})
			.error(function(error){
				alert("error");
			});
		$scope.addPost = function(){
			$http.post("http://jsonplaceholder.typicode.com/posts", {
				title: $scope.newPost.title,
				body:  $scope.newPost.body,
				userId: 1
			}) //en post ponemos los parametros
			.success(function(data, status, header, config){
				$scope.posts.push($scope.newPost);
				console.log($scope.posts);
				//$scope.newPost = {};
			})
			.error(function(data, status, header, config){
				alert("error");
			});
		}
	});