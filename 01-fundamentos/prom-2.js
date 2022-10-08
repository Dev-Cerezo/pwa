function sumar(numero){

 var promesa = new Promise( ( resolve, reject ) => {
 console.log(numero)
    if (numero >= 10){
        reject('el numero es muy alto')
    }

    setTimeout(function(){
        resolve( numero + 1) //se pone null en caso de que no se envie ningun error
    }, 800);

 });

    

    return promesa;

}

sumar(1)
.then(sumar)
.then(sumar)
.then(sumar).then(sumar).then(sumar).then(sumar).then( nuevovalor => console.log(nuevovalor)).catch(err =>{
    console.log('ERROR EN PROMESA')
    console.log(err)
})

