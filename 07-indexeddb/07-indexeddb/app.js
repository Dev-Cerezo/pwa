
// indexedDB: Reforzamiento
let request = window.indexedDB.open('mi-database', 1)


//se actualiza cuando se crea o se sube de version de la BD
request.onupgradeneeded = event => {

    console.log('actualización de la BD')
    let db = event.target.result;

    db.createObjectStore('heroes', {
      keyPath: 'id'  
    })


}

//manejo de errores
request.onerror = event => {
    console.log("DB error:", event.target.error)
};
//insertar datos
request.onsucces = event => {
    let db = event.target.result;

    let heroesData = [
        {id: '111', heroe: 'Spiderman', mensaje: 'aqui su amigo Spiderman'},
        {id: '222', heroe: 'Ironman', mensaje: 'aqui en mi nuevo mark 50'}
    ];

    let heroesTransaction = db.transaction('heroes', 'readwrite');

    heroesTransaction.onerror = event => {
        console.log('Error guardando', event.target.error)
    }

    //informa sobre el exito de la transaccion
    heroesTransaction.oncomplete = event => {
        console.log('Transaccion hecha', event)
    };

    let heroesStore = heroesTransaction.objectStore('heroes');

    for (let heroe of heroesData ){
   heroesStore.add( heroe );
    }

    heroesStore.onsucces = event => {
        console.log('Nuevo item agregado a la base de datos')
    }
    console.log("indexdb")
};

