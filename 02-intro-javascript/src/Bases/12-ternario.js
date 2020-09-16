const activo=true; 

/* let mensaje= '';

if (activo){
    mensaje = 'Activo';
}else{
    mensaje='Inactivo';
} */

//const mensaje = (!activo)?'Activo':'inactivo'
const mensaje = activo && 'Activo';

console.log(mensaje);