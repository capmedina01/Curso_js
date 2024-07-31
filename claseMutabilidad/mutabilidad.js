// tipos de datos primitivos son inmutables
//no cambian su valor; se le asigna es un nuevo valor
let numero = 20;
console.log(numero = numero + 30);

// tipo de datos complejos son mutables
let usuario = {nombre : 'juanjo', edad : 1};
console.log(usuario);
usuario.nombre = 'Juan Jose';
console.log(usuario);

function cambiarNombre(objeto){
    objeto.nombre = 'carlos perdomo';
}

let persona ={nombre: 'Carlos'};
console.log(persona);
cambiarNombre(persona);
console.log(persona);