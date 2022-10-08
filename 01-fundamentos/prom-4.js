

function sumarLento(numero) {

return new Promise(function(resolve,reject){

setTimeout(function(){

  resolve(numero+1)
  //reject('sumar lento fallo')

}, 200);

});


}

let sumarRapido = (numero) => {

  return new Promise( (resolve, reject) =>{

  setTimeout( () => {
    //resolve(numero+1)
    reject('error en sumar rapido')
  }, 300)

  } );

}

Promise.race( [sumarLento(5), sumarRapido(10)] )
.then( respuestas => {
  console.log(respuestas)
} ).catch(error =>{
  console.log(error)
} )