fetch('https://reqres.in/api/users/1')
.then( resp => { 

if( resp.ok ){
    return resp.json;
    console.log(resp.json)
}else{
    //console.log('No existe el usuario 1000')
    throw new Error('No existe el usuario 1000')
}


}).then(console.log).catch(error =>{
    console.log('Error en la peticion');
    console.log(error)
})

