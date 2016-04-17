var app = angular.module("MyFirstApp",[]); //que aplicacion estamos usando y dentro de [] los modulos que necesitamos

app.controller("FirstController", ["$scope",function(m){ //antes era scope ahora encerramos en un array y le llamamos como queremos
	//$scope.nombre = "Martin";
	m.nombre = "Martin";
	//$scope.comentarios = [{
	m.comentarios = [{
		comentario: "Buen dia",
		usuario: "usuario1"
	},{
		comentario: "buenas noches",
		usuario:"usuario2"
	}];

	/*$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
	}*/
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);

	}
}]);