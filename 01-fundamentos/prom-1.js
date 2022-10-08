function sumar(numero, callback){

    if(numero >= 7){
        callback('Numero muy alto');
        return
    }

    setTimeout(function(){
        callback(null, numero + numero) //se pone nul en caso de que no se envie ningun error
    }, 800)

}

sumar(5, function(error, nuevovalor ){
    if(error){
        console.log(error);
        return;
    }
    sumar(nuevovalor, function(error ,nuevovalor2){
        if(error){
            console.log(error);
            return;
        }
        sumar(nuevovalor2, function(error ,nuevovalor3){
            if(error){
                console.log(error);
                return;
            }
            sumar(nuevovalor3, function(error ,nuevovalor4){
                if(error){
                    console.log(error);
                    return;
                }
                console.log(nuevovalor4)
            })
        })

    })

})

//de aqui nacen las promesas de los callbacks anidados