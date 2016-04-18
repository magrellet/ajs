angular.module("todolist", ["LocalStorageModule"]) //Injeccion de dependencia de angular
	.controller("todocontroller", function($scope, localStorageService){
		$scope.todo=[];
		/*
		{
			descripcion: "terminar el curso"
			fecha: 04-04-2015

		}
		*/

		$scope.addTask = function (){
			$scope.todo.push($scope.newTask);
			$scope.newTask={};
		}
	});
