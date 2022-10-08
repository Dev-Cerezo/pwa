
function returTrue(){
    return true;
}
function sumarLento(numero) {

return new Promise(function(resolve,reject){

setTimeout(function(){

  resolve(numero+1)
  //reject('sumar lento fallo')

}, 800);

});


}

let sumarRapido = (numero) => {

  return new Promise( (resolve, reject) =>{

  setTimeout( () => {
    resolve(numero+1)
  }, 300)

  } );

}

let cosas = [sumarLento(5), sumarRapido(10), true, 'hola mundo', returTrue()];

Promise.all(cosas).then(respuestas => {
    console.log(respuestas);
}).catch( console.log )

//sumarLento(5).then(console.log)
//sumarRapido(5).then(console.log)