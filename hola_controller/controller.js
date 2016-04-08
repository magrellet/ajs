var app = angular.module("MyFirstApp",[]); //que aplicacion estamos usando y dentro de [] los modulos que necesitamos

app.controller("FirstController", function($scope){
	$scope.nombre = "Martin";
	$scope.comentarios = [{
		comentario: "Buen dia",
		usuario: "usuario1"
	},{
		comentario: "buenas noches",
		usuario:"usuario2"
	}];

	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);

	}

});